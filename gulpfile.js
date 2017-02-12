'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
  return gulp.src('./src/main/sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./src/main/resources/static/styles/'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/main/sass/*.scss', ['sass']);
});

gulp.task('build', ['sass']);
gulp.task('default', ['sass']);
