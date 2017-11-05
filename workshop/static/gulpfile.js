'use strict';

const gulp = require('gulp'),
      scss = require('gulp-scss'),
      minifyCSS = require('gulp-csso'),
      rename = require('gulp-rename');

gulp.task('scss', function() {
  gulp
      .src('./scss/*.scss')
      .pipe(scss({'bundleExec': true}))
      .pipe(minifyCSS())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('assets/dist/css'))
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('./scss/*.scss', ['scss']);
});

gulp.task('default', ['scss'], function(){

});
