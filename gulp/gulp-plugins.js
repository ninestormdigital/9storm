module.exports = {
    concat: require('gulp-concat'),
    cssmin: require('gulp-cssmin'),
    uglify: require('gulp-uglify'),
    sass: require('gulp-sass'),
    cssImport: require('gulp-cssimport'),
    sourcemaps: require('gulp-sourcemaps'),
    rename: require('gulp-rename'),
    babel: require('gulp-babel'),
    clean: require('gulp-clean'),
    imagemin: require('gulp-imagemin'),
    log: require('fancy-log'),
    merge: require('merge-stream'),
    emptyPipe: require("gulp-empty-pipe"),
    argv: require('yargs').argv
  };