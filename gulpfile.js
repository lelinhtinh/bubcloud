/* eslint-env node */

// Load Gulp
var fs = require('fs'),
    path = require('path'),
    argv = require('yargs').argv,
    gulp = require('gulp'),
    include = require('gulp-include'),
    changed = require('gulp-changed'),
    browserSync = require('browser-sync')
    .create(),
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
        ' * Made by <%= pkg.author.name %>',
        ' * Under <%= pkg.license %> License',
        ' */',
        ''
    ].join('\n'),

    pjPath = {
        public: 'public/' + pkg.version,
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
            .pipe(less())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(cleanCSS())
            .pipe(header(banner, {
                pkg: pkg
            }))
            .pipe(gulp.dest(pjPath.public))
            .pipe(gulp.dest('dist'))
            .pipe(browserSync.stream());
    }

    var forum = buildLess('src/assets/less/style.less'),
        chatbox = buildLess('src/assets/less/chatbox.less');

    return merge(forum, chatbox);
});

// npm run gulp css
gulp.task('css', function() {
    return gulp.src('src/assets/css/mobile.css')
        .pipe(changed('dist'))
        .pipe(gulp.dest(pjPath.public))
        .pipe(gulp.dest('dist'));
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
                .pipe(gulp.dest(pjPath.public))
                .pipe(gulp.dest('dist'));
        });

    return merge(tasks);
});


// npm run gulp prezip
gulp.task('prezip', function() {
    function changeJsPath(tplName, fileName) {
        return gulp.src('src/templates/General/' + tplName + '.tpl')
            .pipe(changed('dist'))
            .pipe(replace('/bubcloud.' + fileName + '.js', rawgitPath + '/bubcloud.' + fileName + '.js'))
            .pipe(gulp.dest('dist/templates/General/'));
    }

    var rawgitPath = config.cdn + '/baivong/bubcloud/master/' + pjPath.public,

        headerTpl = gulp.src('src/templates/General/overall_header.tpl')
        .pipe(changed('dist'))
        .pipe(replace('/style.css', rawgitPath + '/style.css'))
        .pipe(replace('/bubcloud.header.js', rawgitPath + '/bubcloud.header.js'))
        .pipe(gulp.dest('dist/templates/General/')),

        footerTpl = changeJsPath('overall_footer_end', 'footer'),
        indexTpl = changeJsPath('index_body', 'index'),
        topicTpl = changeJsPath('viewtopic_body', 'topic'),

        otherTpl = gulp.src([pjPath.tpl, '!src/templates/General/overall_header.tpl', '!src/templates/General/overall_footer_end.tpl'], {
            base: './src/'
        })
        .pipe(changed('dist'))
        .pipe(gulp.dest('dist')),

        mobileTpl = gulp.src('src/templates/Mobile version/overall_header.tpl', {
            base: './src/'
        })
        .pipe(changed('dist'))
        .pipe(replace('/mobile.css', rawgitPath + '/mobile.css'))
        .pipe(gulp.dest('dist'));

    return merge(headerTpl, footerTpl, indexTpl, topicTpl, otherTpl, mobileTpl);
});

// npm run zip
// npm run gulp zip
gulp.task('zip', ['prezip'], function() {
    return gulp.src('dist/templates/**/*.tpl')
        .pipe(changed(pjPath.public))
        .pipe(zip('forumotion.' + pkg.name + '.zip'))
        .pipe(gulp.dest(pjPath.public));
});


// npm run gulp watch
gulp.task('watch', function() {
    gulp.watch(pjPath.js + '**/*.js', ['js']).on('change', browserSync.reload);
    gulp.watch(pjPath.less, ['less']);
    gulp.watch(pjPath.tpl, ['zip']);
});

// npm run gulp
gulp.task('default', ['watch']);

// npm test
// npm run gulp lint
gulp.task('lint', ['eslint', 'stylelint']);

// npm run build
// npm run gulp build
gulp.task('build', ['lint', 'less', 'js', 'zip', 'css'], function() {
    return gulp.src('bin/*.bbtheme')
        .pipe(changed(pjPath.public))
        .pipe(gulp.dest(pjPath.public));
});


// npm start
// npm run gulp serve
gulp.task('serve', ['less', 'js', 'css', 'watch'], function() {
    browserSync.init({
        proxy: argv.proxy || config.proxy,
        port: argv.port || config.port,
        serveStatic: ['./dist']
    });
});
