var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var jshint = require('gulp-jshint');

var sourcesForVendorJS = ['bower_components/jquery/**/*min.js',
                          'bower_components/bootstrap/**/*min.js',
                          'bower_components/angular/**/*min.js',
                          'bower_components/angular-ui-router/**/*min.js',
                          'bower_components/ng-animate/**/*min.js'];

/*task which is used to merge all JS files from different libs and frameworks
to one file and move it to dist/js/vendor.js*/
gulp.task('vendorJS', function() {
  gulp.src(sourcesForVendorJS)
	.pipe(concat('vendor.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
});

/*task which is used to merge all CSS files from different libs and frameworks
to one file and move it to dist/css/vendor.css*/
gulp.task('vendorCSS', function() {
  gulp.src(['bower_components/**/*min.css', 'bower_components/ng-animate/css/ng-animation.css'])
	.pipe(concat('vendor.css'))
    .pipe(gulp.dest('dist/css'))
});

//task which is used to copy index.html file from src directory to dist directory
gulp.task('copyIndexFile', function() {
  gulp.src('src/index.html')
      .pipe(gulp.dest('dist'))
});

//task which is used to copy app.js file from src directory to dist directory
gulp.task('copyAppFile', function () {
    gulp.src('src/app.js')
        .pipe(gulp.dest('dist'))
});

/*task which is used to convert custom styles from src/appCSS.scss
to CSS file and move it to dist/css/appCSS.css*/
gulp.task('convertSass', function() {
  gulp.src('src/app.scss')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
});

//task which is uses to remove dist folder
gulp.task('clean', function () {
    gulp.src('dist', {read: false})
        .pipe(clean());
});

//task which is used to validate custom JS files
gulp.task('validateJS', function() {
    gulp.src('src/**/*.js')
        .pipe(jshint());
});

//task which is used to move views folder from src to dist
gulp.task('moveViews', function() {
   gulp.src('src/views/**/*.html')
       .pipe(gulp.dest('dist/views/'));
});

//task which is used to move fonts folder from bower_components to dist
gulp.task('moveFonts', function() {
   gulp.src('bower_components/bootstrap/fonts/**/*')
       .pipe(gulp.dest('dist/fonts'));
});

//task which is used to move and merge all js files from components to dist/js/components.js
gulp.task('componentsJS', function() {
    gulp.src(['src/components/widgets/widgets.module.js',
        'src/components/**/*module.js',
        'src/components/**/*.js'])
        .pipe(concat('components.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

//task which is used to move and merge all js files from views to dist/js/views.js
gulp.task('viewsJS', function() {
    gulp.src(['src/views-controllers/**/*module.js', 'src/views-controllers/**/*.js'])
        .pipe(concat('views.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

//task which is used to move and merge all js files from services to dist/js/services.js
gulp.task('servicesJS', function() {
    gulp.src(['src/services/**/*module.js', 'src/services/**/*.js'])
        .pipe(concat('services.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});

/*task which is used to merge all CSS files from different components
 to one file and move it to dist/css/components.css*/
gulp.task('componentsCSS', function() {
    gulp.src('src/components/**/*.scss')
        .pipe(sass())
        .pipe(concat('components.css'))
        .pipe(gulp.dest('dist/css'))
});

/*task which is used to merge all CSS files from different views
 to one file and move it to dist/css/views.css*/
gulp.task('viewsCSS', function() {
    gulp.src('src/views-styles/**/*.scss')
        .pipe(sass())
        .pipe(concat('views.css'))
        .pipe(gulp.dest('dist/css'))
});

//task which is used to move all html files from components to dist/components
gulp.task('moveComponentsHTML', function() {
    gulp.src('src/components/**/*.html')
        .pipe(gulp.dest('dist/components/'));
});

//task which is used to copy images directory src directory to dist directory
gulp.task('copyImages', function() {
    gulp.src('src/images/**/')
        .pipe(gulp.dest('dist/images'))
});

//task which is used to create dist folder
gulp.task('default', ['vendorJS', 'vendorCSS', 'convertSass', 'copyAppFile', 'copyIndexFile', 'moveViews', 'moveFonts', 'componentsJS', 'componentsCSS', 'viewsCSS', 'moveComponentsHTML', 'viewsJS', 'servicesJS', 'copyImages']);
