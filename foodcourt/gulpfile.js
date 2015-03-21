'use strict'

var gulp = require('gulp');
var connect = require('gulp-connect');
var browser = require('browserify');
var source = require('vinyl-source-stream');
var jade = require('gulp-jade');
var less = require('gulp-less');

gulp.task('connect', function () {
  connect.server({
    root: 'build',
    port: 8080,
    livereload: true
  });
});

gulp.task('browserify', function () {
  browser({
    entries: ['./foodcourt.coffee'],
    extensions: ['.coffee']
  }).transform('coffeeify')
    .bundle()
    .pipe(source('client.js'))
    .pipe(gulp.dest('build'))
    .pipe(connect.reload())
});

gulp.task('jade', function () {
  gulp.src('index.jade')
    .pipe(jade())
    .pipe(gulp.dest('build'))
    .pipe(connect.reload())
});

gulp.task('less', function () {
  gulp.src('index.less')
    .pipe(less())
    .pipe(gulp.dest('build'))
    .pipe(connect.reload())
});

gulp.task('default', ['browserify', 'jade', 'less']);

gulp.task('watch', ['default', 'connect'], function() {
  gulp.watch('foodcourt.coffee', ['browserify']);
  gulp.watch('index.jade', ['jade']);
  gulp.watch('index.less', ['less']);
});
