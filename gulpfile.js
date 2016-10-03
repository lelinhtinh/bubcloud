/* eslint-env node */

// Load Gulp
var gulp = require('gulp'),
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

    path = {
        public: 'public/' + pkg.version,
        js: {
            all: 'src/assets/**/*.js',
            top: 'src/assets/js/top/*.js',
            bottom: 'src/assets/js/bottom/*.js'
        },
        less: 'src/assets/less/**/*.less',
        tpl: 'src/templates/**/*.tpl'
    };


// npm run gulp stylelint
gulp.task('stylelint', function() {
    return gulp.src(path.less)
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
    return gulp.src('src/assets/less/style.less')
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
        .pipe(gulp.dest(path.public))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
});


// npm run gulp eslint
gulp.task('eslint', function() {
    return gulp.src([path.js.top, path.js.bottom])
        .pipe(changed('dist'))
        .pipe(eslint())
        .pipe(eslint.format());
});

// npm run gulp js
gulp.task('js', function() {
    function buildJs(input, output) {
        return gulp.src(input)
            .pipe(uglify({
                output: {
                    'ascii_only': true
                }
            }))
            .pipe(concat(pkg.name + '.' + output + '.js'))
            .pipe(header(banner, {
                pkg: pkg
            }))
            .pipe(gulp.dest(path.public))
            .pipe(gulp.dest('dist'));
    }

    var jsTop = buildJs(path.js.top, 'top'),
        jsBottom = buildJs(path.js.bottom, 'bottom');

    return merge(jsTop, jsBottom);
});


// npm run gulp prezip
gulp.task('prezip', function() {
    var rawgitPath = config.cdn + '/baivong/bubcloud/master/' + path.public,

        headerTpl = gulp.src('src/templates/General/overall_header.tpl')
        .pipe(changed('dist'))
        .pipe(replace('/style.css', rawgitPath + '/style.css'))
        .pipe(replace('/bubcloud.top.js', rawgitPath + '/bubcloud.top.js'))
        .pipe(gulp.dest('dist/templates/General/')),

        footerTpl = gulp.src('src/templates/General/overall_footer_end.tpl')
        .pipe(changed('dist'))
        .pipe(replace('/bubcloud.bottom.js', rawgitPath + '/bubcloud.bottom.js'))
        .pipe(gulp.dest('dist/templates/General/')),

        otherTpl = gulp.src([path.tpl, '!src/templates/General/overall_header.tpl', '!src/templates/General/overall_footer_end.tpl'], {
            base: './src/'
        })
        .pipe(changed('dist'))
        .pipe(gulp.dest('dist'));

    return merge(headerTpl, footerTpl, otherTpl);
});

// npm run zip
// npm run gulp zip
gulp.task('zip', ['prezip'], function() {
    return gulp.src('dist/templates/**/*.tpl')
        .pipe(changed(path.public))
        .pipe(zip('forumotion.' + pkg.name + '.zip'))
        .pipe(gulp.dest(path.public));
});


// npm run gulp watch
gulp.task('watch', function() {
    gulp.watch(path.js.all, ['js']).on('change', browserSync.reload);
    gulp.watch(path.less, ['less']);
    gulp.watch(path.tpl, ['zip']);
});

// npm run gulp
gulp.task('default', ['watch']);

// npm test
// npm run gulp lint
gulp.task('lint', ['eslint', 'stylelint']);

// npm run build
// npm run gulp build
gulp.task('build', ['less', 'js', 'zip'], function() {
    return gulp.src('bin/*.bbtheme')
        .pipe(changed(path.public))
        .pipe(gulp.dest(path.public));
});


// npm start
// npm run gulp serve
gulp.task('serve', ['less', 'js', 'watch'], function() {
    browserSync.init({
        proxy: config.proxy,
        port: config.port,
        serveStatic: ['./dist']
    });
});
