var gulp = require('gulp'),
    cleanCss = require('gulp-clean-css'),
    debug = require('gulp-debug'),
    changed = require('gulp-changed'),
    del = require('del'),
    config = require('../config'),
    autoprefixer = require('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    cache = require('gulp-cached'),
    responsive = require('gulp-responsive'),
    svgmin = require('gulp-svgmin'),
    scss = require('gulp-sass'),
    spritesmith = require('gulp.spritesmith'),
    sassGlob = require('gulp-sass-glob');

gulp.task('clean-dist', function () {
    return del(config.dist_path, {
        force: true
    });
});


gulp.task('sprites', function () {
    var sass_output = 'mmp/static/sass/sprites/';

    var spriteData = gulp.src('mmp/static/sprites/**.*')
        .pipe(spritesmith({
            imgName: 'sprite.png',
            retinaSrcFilter: 'mmp/static/sprites/*@2x.png',
            retinaImgName: 'sprite@2x.png',
            cssName: 'style-sprite.scss',
            algorithm: 'alt-diagonal',
            imgPath: '/static/assets/dist/sprites/sprite.png'
        }));
    spriteData.css.pipe(gulp.dest(sass_output));
    spriteData.img.pipe(gulp.dest(config.paths.sprites));
});


gulp.task('retina-icons', function () {
    var sprite_output = 'mmp/static/sprites-retina/';
    gulp.src('mmp/static/sprites-retina/**.*')
        // don't need to use responsive, rename for original file
        .pipe(rename({
            suffix: '@2x'
        }))
        .pipe(imagemin({
            progressive: true,
            silent: true
        }))
        .pipe(gulp.dest(sprite_output));

    gulp.src('mmp/static/sprites-retina/**.*')
        .pipe(responsive({
            '**/**': [
                {
                    width: '50%'
                }
            ]
        }, {
            progressive: true,
            errorOnUnusedImage: false,
            errorOnUnusedConfig: false,
            silent: true
        }))
        .pipe(gulp.dest(sprite_output));
});


gulp.task('images', function () {
    gulp.src('mmp/static/images/**/*.{jpg,png}')
        // don't need to use responsive, rename for original file
        .pipe(rename({
            suffix: '@2x'
        }))
        .pipe(imagemin({
            progressive: true,
            silent: true
        }))
        .pipe(gulp.dest(config.paths.images));

    gulp.src('mmp/static/images/**/*.{jpg,png}')
        .pipe(cache('images'))
        .pipe(responsive({
            '**/**': [
                {
                    width: '50%'
                }
            ]
        }, {
            progressive: true,
            errorOnUnusedImage: false,
            errorOnUnusedConfig: false,
            silent: true
        }))
        .pipe(imagemin({
            progressive: true,
            silent: true
        }))
        .pipe(gulp.dest(config.paths.images));

    // Don't support responsive for svg, ico, gif files
    gulp.src('mmp/static/images/**/*.{svg,ico,gif}')
        .pipe(changed(config.paths.images))
        .pipe(gulp.dest(config.paths.images));
});


// svg as background
gulp.task('svg', function () {
    return gulp
        .src('mmp/static/svg/**/*')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            },
            plugins: [{
                removeDoctype: false
            }, {
                removeComments: false
            }, {
                cleanupNumericValues: {
                    floatPrecision: 2
                }
            }, {
                convertColors: {
                    names2hex: false,
                    rgb2hex: false
                }
            }]
        }))
        .pipe(gulp.dest(config.paths.svg));
});


// fonts
gulp.task('fonts', function () {
    return gulp
        .src('mmp/static/fonts/**/*')
        .pipe(gulp.dest(config.paths.fonts));
});


// main task
gulp.task('scss', function () {
    return gulp.src('mmp/static/sass/**/*.scss')
    .pipe(sassGlob())
    .pipe(scss().on('error', scss.logError))
    .pipe(autoprefixer({
        browsers: [
            'last 5 versions',
            'IE 9',
            'Safari > 6',
            'Firefox > 25',
            'iOS >= 8',
            'last 20 Chrome versions'
        ]
    }))
    .pipe(cleanCss({
        compatibility: 'i18'
    }))
    .pipe(rename(function (path) {
        path.basename += '.min';
    }))
    .pipe(gulp.dest(config.paths.css));
});

gulp.task('scss-compile', ['sprites', 'images', 'svg', 'fonts'], function () {
    return gulp.src('mmp/static/sass/**/*.scss')
    .pipe(sassGlob())
    .pipe(debug({
        title: 'unicorn:'
    }))
    .pipe(scss().on('error', scss.logError))
    .pipe(autoprefixer({
        browsers: [
            'last 5 versions',
            'IE 9',
            'Safari > 6',
            'Firefox > 25',
            'iOS >= 8',
            'last 20 Chrome versions'
        ]
    }))
    .pipe(cleanCss({
        compatibility: 'i18'
    }))
    .pipe(rename(function (path) {
        path.basename += '.min';
    }))
    .pipe(gulp.dest(config.paths.css));
});

// Watchers for local development
gulp.task('prepare-local', function(callback) {
    runSequence('clean-dist', ['scss', 'sprites', 'images', 'svg'], callback);
});

// watcher with prod behaviour
gulp.task('local', ['prepare-local'], function () {
    gulp.watch('mmp/static/sass/**/*.scss', ['scss']);
    gulp.watch('mmp/static/sprites/**/*.png', ['sprites']);
    gulp.watch('mmp/static/svg/**/*.svg', ['svg']);
    gulp.watch('mmp/static/images/**/*.{jpg,png}', ['images']);
});
