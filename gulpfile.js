var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');

/*task which is used to merge all JS files from different libs and frameworks
to one file and move it to dist/js/vendor.js*/
gulp.task('vendorJS', function() {
  gulp.src(['bower_components/jquery/**/*min.js',
      'bower_components/bootstrap/**/*min.js',
      'bower_components/angular/**/*min.js'])
	.pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

/*task which is used to merge all CSS files from different libs and frameworks
to one file and move it to dist/css/vendor.css*/
gulp.task('vendorCSS', function() {
  gulp.src('bower_components/**/*min.css')
	.pipe(concat('vendor.css'))
    .pipe(gulp.dest('dist/css'))
});

//task which is used to copy index.html file from src directory to dist directory
gulp.task('copyIndexFile', function() {
  gulp.src('src/index.html')
      .pipe(gulp.dest('dist'))
});

/*task which is used to convert custom styles from src/customStyles.scss
to CSS file and move it to dist/css/customStyles.css*/
gulp.task('convertSass', function() {
  gulp.src('src/customStyles.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
});

//task which is uses to remove dist folder
gulp.task('clean', function () {
    gulp.src('dist', {read: false})
        .pipe(clean());
});

//task which is used to create dist folder
gulp.task('build', ['clean', 'vendorJS', 'vendorCSS', 'convertSass', 'copyIndexFile']);

//task which is used to validate custom JS files
gulp.task('validateJS', function() {
    gulp.src('src/**/*.js')
        .pipe(jshint());
})
