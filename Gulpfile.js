var gulp        = require('gulp');

var postcss     = require('gulp-postcss');
var reporter    = require('postcss-reporter');
var syntax_scss = require('postcss-scss');
var stylelint   = require('stylelint');

gulp.task('js:lint', function () {
    var jshint = require('gulp-jshint');

    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('js:minify', function () {
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');

    return gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/'));
});

gulp.task('sass:debug', function () {
    var sass = require('gulp-sass');
    var smap = require('gulp-sourcemaps');

    gulp.src('sass/Droopy.scss')
        .pipe(smap.init())
        .pipe(sass({
                outputStyle: 'expanded'
              }).on('error', sass.logError))
        .pipe(smap.write('.'))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('sass:dist', function () {
    var sass = require('gulp-sass');

    gulp.src('sass/Droopy.scss')
        .pipe(sass({
                outputStyle: 'compressed'
              }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/'));
});

gulp.task("sass:lint", function() {
    var processors = [
        stylelint(),
        reporter({
            clearMessages: true,
            throwError: true
        })
    ];

    return gulp.src([
            'sass/**/*.scss',
            '!sass/vendor/**/*.scss'
        ])
        .pipe(postcss(processors, { syntax: syntax_scss }));
});

gulp.task('watch', function() {
    gulp.watch(['sass/**/*.scss'], ['sass:dist']);
    gulp.watch(['js/**/*.js'], ['js:dist']);
});

gulp.task('default', ['sass:debug', 'watch']);
gulp.task('travis',  ['sass:lint']);
gulp.task('dist',    ['sass:lint', 'sass:dist', 'js:hint', 'js:minify']);
