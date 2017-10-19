var gulp = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('build', function(callback) {
    runSequence('clean-dist', ['scripts-build', 'scss-compile'], callback);
});
