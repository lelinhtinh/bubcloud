/* eslint-env node */

// Load Gulp
var fs = require('fs'),
    path = require('path'),
    argv = require('yargs').argv,
    del = require('del'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpSequence = require('gulp-sequence'),
    include = require('gulp-include'),
    changed = require('gulp-changed'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    plumber = require('gulp-plumber'),
    merge = require('merge-stream'),
    less = require('gulp-less'),
    stylelint = require('gulp-stylelint'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    eslint = require('gulp-eslint'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    replace = require('gulp-string-replace'),
    zip = require('gulp-zip'),
    header = require('gulp-header'),
    pkg = require('./package.json'),
    config = require('./config.json'),

    banner = ['/*!',
        ' * <%= pkg.name %> - v<%= pkg.version %>',
        ' * <%= pkg.description %>',
        ' * <%= pkg.homepage %>',
        ' *',
        ' * Made by <%= pkg.author %>',
        ' * Under <%= pkg.license %> License',
        ' */',
        ''
    ].join('\n'),

    pjPath = {
        bin: 'bin',
        js: 'src/assets/scripts/',
        less: 'src/assets/less/**/*.less',
        tpl: 'src/templates/**/*.tpl'
    };


// npm run gulp stylelint
gulp.task('stylelint', function() {
    return gulp.src(pjPath.less)
        .pipe(stylelint({
            failAfterError: false,
            reporters: [{
                formatter: 'string',
                console: true
            }]
        }));
});

// npm run gulp less
gulp.task('less', function() {
    function buildLess(input) {
        return gulp.src(input)
            .pipe(changed('dist', {
                hasChanged: changed.compareSha1Digest,
                extension: '.css'
            }))
            .pipe(plumber())
            .pipe(less().on('error', function(err) {
                gutil.log(err);
                this.emit('end');
            }))
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(cleanCSS())
            .pipe(header(banner, {
                pkg: pkg
            }))
            .pipe(gulp.dest('dist'))
            .pipe(browserSync.stream());
    }

    var forum = buildLess('src/assets/less/style.less'),
        chatbox = buildLess('src/assets/less/chatbox.less');

    return merge(forum, chatbox);
});


// npm run gulp eslint
gulp.task('eslint', function() {
    return gulp.src(pjPath.js + '**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});

function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

// npm run gulp js
gulp.task('js', function() {
    var folders = getFolders(pjPath.js),

        tasks = folders.map(function(folder) {
            return gulp.src(pjPath.js + folder + '/*.js')
                .pipe(changed('dist'))
                .pipe(include({
                    includePaths: __dirname + '/src/assets/scripts/'
                }))
                .pipe(gulpif(!argv.dev, uglify({
                    output: {
                        'ascii_only': true
                    }
                })))
                .pipe(concat(pkg.name + '.' + folder + '.js'))
                .pipe(header(banner, {
                    pkg: pkg
                }))
                .pipe(gulp.dest('dist'));
        });

    return merge(tasks);
});


// npm run gulp prezip
gulp.task('prezip', function() {
    function changeFilePath(tplPath, fileName) {
        var stream = gulp.src('src/templates/' + tplPath + '.tpl', {
                base: './src/'
            }).pipe(changed('dist')),
            replacePipe = function(str) {
                stream = stream.pipe(replace(str, cdnPath + str));
            };

        if (typeof fileName === 'string') {
            replacePipe(fileName);
        } else {
            fileName.forEach(function(val) {
                replacePipe(val);
            });
        }

        stream.pipe(gulp.dest('dist'));

        return stream;
    }

    var cdnPath = config.cdn + '@' + pkg.version + '/dist',

        headerTpl = changeFilePath('General/overall_header', ['/style.css', '/bubcloud.header.js']),
        footerTpl = changeFilePath('General/overall_footer_end', '/bubcloud.footer.js'),
        indexTpl = changeFilePath('General/index_body', '/bubcloud.index.js'),
        topicTpl = changeFilePath('General/viewtopic_body', '/bubcloud.topic.js'),

        postingTpl = changeFilePath('Post & Private Messages/posting_body', ['/bubcloud.posting.js', '/bubcloud.sceditor.js']),

        otherTpl = gulp.src(
            [
                pjPath.tpl,
                '!src/templates/General/overall_header.tpl',
                '!src/templates/General/overall_footer_end.tpl',
                '!src/templates/General/index_body.tpl',
                '!src/templates/General/viewtopic_body.tpl',
                '!src/templates/Post & Private Messages/posting_body.tpl'
            ], {
                base: './src/'
            })
            .pipe(changed('dist'))
            .pipe(gulp.dest('dist'));

    return merge(headerTpl, footerTpl, indexTpl, topicTpl, postingTpl, otherTpl);
});

// npm run zip
// npm run gulp zip
gulp.task('zip', ['prezip'], function() {
    return gulp.src('dist/templates/**/*.tpl')
        .pipe(changed(pjPath.bin))
        .pipe(zip('forumotion.' + pkg.name + '.zip'))
        .pipe(gulp.dest(pjPath.bin));
});


// npm run gulp watch
gulp.task('watch', function() {
    gulp.watch(pjPath.js + '**/*.js', ['js']).on('change', browserSync.reload);
    gulp.watch(pjPath.less, ['less']);
});

// npm run gulp
gulp.task('default', ['watch']);

// npm test
// npm run gulp lint
gulp.task('lint', ['eslint', 'stylelint']);


// npm run gulp prebuild
gulp.task('prebuild', function() {
    return del('dist');
});

// npm run build
// npm run gulp build
// gulp build --deploy
gulp.task('build', gulpSequence('prebuild', 'lint', ['less', 'js', 'zip']));


// npm start
// npm run gulp serve
// gulp serve --dev
gulp.task('serve', ['less', 'js', 'watch'], function() {
    browserSync.init({
        proxy: argv.proxy || config.proxy,
        port: argv.port || config.port,
        serveStatic: ['./dist']
    });
});
