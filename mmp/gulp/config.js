'use strict';

var dist_path = 'mmp/static/assets/dist',
    paths = {
        src: 'mmp/static/',
        jsDest: 'mmp/static/gulp_built/js/',
        css: dist_path + '/css',
        images: dist_path + '/images',
        sprites: dist_path + '/sprites',
        fonts: dist_path + '/fonts',
        svg: dist_path + '/svg'
    };

var generateSourceMap = false;

exports.paths = paths;
exports.dist_path = dist_path;
exports.generateSourceMap = generateSourceMap;
