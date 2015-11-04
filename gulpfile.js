'use strict';

var gulp = require('gulp'),
    babelify = require('babelify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');

gulp.task('build', function() {
    browserify({
        entries: './client/app/app.js',
        debug: true
    })
    .transform(babelify, {
            presets: ['es2015'],
            compact: false,
            global: true
        })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('copy', function() {
    gulp.src('client/index.html')
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch('client/**/*.js', ['build']);
    gulp.watch('client/*.html', ['copy']);
});

gulp.task('default', ['copy', 'build', 'watch']);