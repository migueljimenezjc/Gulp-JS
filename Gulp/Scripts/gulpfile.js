/// <binding AfterBuild='default' ProjectOpened='default' />
var gulp = require('gulp'),
    gulpConcat = require('gulp-concat-util'),
    uglify = require('gulp-uglify'),
    minify = require('gulp-minify');


var jsProject = [
    "./Scripts/Cumplimiento/Cumplimiento.Bitacora.js",
    "./Scripts/Cumplimiento/Cumplimiento.Casos.js"
];


gulp.task('Cumplimiento', function () {
    gulp.src(jsProject)
        .pipe(gulpConcat('appBundle.js', { newLine: ';' }))
        .pipe(minify())
        .pipe(uglify())
        .pipe(gulp.dest('Scripts/Gulp'));
});

gulp.task('default',['Cumplimiento'], function () {
    console.log("Ejecutar");
});