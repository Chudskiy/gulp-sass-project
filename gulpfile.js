'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

function buildStyles() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

function minifyCss() {
    return gulp.src('./dist/css/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./dist/css'));
}

exports.buildStyles = buildStyles;
exports.minifyCss = minifyCss;
exports.watch = function () {
    gulp.watch('./sass/**/*.scss', gulp.series('buildStyles'));
};


