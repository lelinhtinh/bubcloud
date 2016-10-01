/* eslint-env node */

// Load Gulp
var gulp = require('gulp'),
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
    zip = require('gulp-zip'),
    header = require('gulp-header'),
    pkg = require('./package.json'),

    banner = ['/*!',
        ' * <%= pkg.name %> - v<%= pkg.version %>',
        ' * <%= pkg.description %>',
        ' * <%= pkg.homepage %>',
        ' *',
        ' * Made by <%= pkg.author.name %>',
        ' * Under <%= pkg.license %> License',
        ' */',
        ''
    ].join('\n');


// npm run gulp eslint
gulp.task('eslint', function() {
    return gulp.src(['assets/js/top/*.js', 'assets/js/bottom/*.js'])
        .pipe(eslint())
        .pipe(eslint.format());
});

// npm run gulp stylelint
gulp.task('stylelint', function() {
    return gulp.src('assets/less/**/*.less')
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
    return gulp.src('assets/less/style.less')
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
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.stream());
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
            .pipe(concat(pkg.name + output))
            .pipe(header(banner, {
                pkg: pkg
            }))
            .pipe(gulp.dest('dist'));
    }

    var jsTop = buildJs('assets/js/top/*.js', '.top.js'),
        jsBottom = buildJs('assets/js/bottom/*.js', '.bottom.js');
    return merge(jsTop, jsBottom);
});

// npm run zip
// npm run gulp zip
gulp.task('zip', ['less'], function() {
    gulp.src('templates/**/*')
        .pipe(zip('forumotion.' + pkg.name + '.zip'))
        .pipe(gulp.dest('dist'));
});

// npm run gulp watch
gulp.task('watch', function() {
    gulp.watch('assets/js/**/*.js', ['js']);
    gulp.watch('assets/less/**/*.less', ['less']);
    gulp.watch('templates/**/*.tpl', ['zip']);

    gulp.watch('dist/*.js').on('change', browserSync.reload);
});


// npm run gulp
gulp.task('default', ['watch']);

// npm test
// npm run gulp lint
gulp.task('lint', ['eslint', 'stylelint']);

// npm run build
// npm run gulp build
gulp.task('build', ['js', 'zip']);

// npm start
// npm run gulp serve
gulp.task('serve', ['less', 'js', 'watch'], function() {
    browserSync.init({
        proxy: pkg.homepage,
        serveStatic: ['./dist']
    });
});
