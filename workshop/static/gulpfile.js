'use strict';

const gulp = require('gulp'),
      scss = require('gulp-scss'),
      minifyCSS = require('gulp-csso'),
      rename = require('gulp-rename'),
      del = require('del');

gulp.task('clean-dest', function() {
    return del('./assets/dest/*', {
        force: true
    });
});

gulp.task('scss', function() {
  return gulp.src('./scss/*.scss')
      .pipe(scss({'bundleExec': true}))
      .pipe(minifyCSS())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('assets/dest/css/'));
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch('./scss/*.scss', ['scss']);
});

gulp.task('default', ['clean-dest','scss'], function(){

});
