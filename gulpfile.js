var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

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