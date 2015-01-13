var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('vendorJS', function() {
  gulp.src('bower_components/**/*min.js')
	.pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

gulp.task('vendorCSS', function() {
  gulp.src('bower_components/**/*min.css')
	.pipe(concat('vendor.css'))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('copyIndexFile', function() {
  gulp.src('src/index.html')
      .pipe(gulp.dest('dist'))
});

gulp.task('convertSass', function() {
  gulp.src('src/customStyles.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
});
