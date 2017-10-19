var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    config = require('../config'),
    _ = require('lodash'),
    sourcemaps = require('gulp-sourcemaps'),
    watch = require('gulp-watch'),
    path = require('path'),
    walk = require('walk'),
    debug = require('gulp-debug');

const fs = require('fs');

var packagePath = 'mmp/gulp/packages/';

function collectPackages(){
    var packages = [];
    options = {
        listeners: {
            directories: function (root, dirStatsArray, next) {
                // dirStatsArray is an array of `stat` objects with the additional attributes
                // * type
                // * error
                // * name
                next();
            },
            file: function (root, fileStats, next) {
                var packageObj = fs.readFileSync(path.join(root, fileStats.name), 'utf8');
                packages.push(JSON.parse(packageObj));
                next();
            },
            errors: function (root, nodeStatsArray, next) {
                next();
            }
        }
    };

    walker = walk.walkSync(packagePath, options);
    return packages;
}


var scriptsBuild = function(packagesToBuild) {
    console.log(packagesToBuild.length + ' files are being rebuilt:');
    _.each(
        packagesToBuild,
        function(packageObj){
            console.log(packageObj.min_name);
            // make paths full
            var packageFiles = _.map(
                packageObj.files,
                function(filePath) {
                    return config.paths.src + filePath;
                }
            );
            packageFiles.forEach(fs.statSync); // will throw an error if file not found
            gulp.src(packageFiles)
                //.pipe(debug({title: 'unicorn:'}))
                .pipe(concat(packageObj.min_name))
                .pipe(uglify())
                .pipe(gulp.dest(config.paths.jsDest));
        }
    );
};


// tasks
gulp.task('scripts-build', function(){
    var packages = collectPackages();
    scriptsBuild(packages);
});


// watcher
gulp.task('watch', function () {
    /*
        watch all files from gulp/packages/ that have to be minified
        and rebuild only that minified files which files were changed
    */
    var packages = collectPackages();

    // define all files that have to be watched
    var filesToWatch = _.flatten(_.map(packages, 'files'));
    filesToWatch = _.map(
        filesToWatch,
        function(fileName){return config.paths.src + fileName}
    );

    watch(
        filesToWatch,
        // vinyl is object that corresponds to the file that caused the event
        function(vinyl){
            var changedFiles = _.map(
                vinyl.history,
                function(file_path){
                    // we have pathes like .../mmp/src/mmp/static/crm/js/check-for-models-update.js
                    // but need path after config.paths.src (mmp/static/)
                    return _.last(file_path.split(config.paths.src));
                }
            );
            var packagesToRebuild = [];
            for(var i=0; i < changedFiles.length; i++){
                changedFile = changedFiles[i];
                console.log('CHANGED FILE: ' + changedFile);
                packagesToRebuild = packagesToRebuild.concat(
                    _.filter(
                        packages,
                        function(obj){
                            return obj.files.indexOf(changedFile) > -1;
                        }
                    )
                )
            }
            scriptsBuild(packagesToRebuild);
        }
    );
});
