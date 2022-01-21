var gulp          = require('gulp'),
    sass          = require('gulp-sass'),
    autoprefixer  = require('gulp-autoprefixer'),
    minifycss     = require('gulp-minify-css'),
    uglify        = require('gulp-uglify'),
    concat        = require('gulp-concat'),
    livereload    = require('gulp-livereload'),
    sourcemaps    = require('gulp-sourcemaps'),
    webserver     = require('gulp-webserver');
 

function errorLog (error) {
  console.error(error.message); 
  this.emit('end');
}

gulp.task('default', function() {
    gulp.start('styles', 'scripts', 'watch');
});

gulp.task('styles', function() {
  return gulp.src('app/sass/**/*.scss')
    .pipe(sourcemaps.init())
      .pipe(sass())
      .on('error', errorLog)
      .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
      .pipe(minifycss())
      .pipe(concat('style.min.css'))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('app/css/'))
    .pipe(livereload());
});


gulp.task('scripts', function() {
  // The order matters. First we want our initialization, which attaches backbone to the window.
  // Then we load models, then collections, then views.
  // Then, all other javascript (such as our main.js).
  return gulp.src(['app/js/init.js', 'app/js/**/*.model.js', 'app/js/**/*.collection.js', 'app/js/**/*.view.js', 'app/js/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.min.js'))
      .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .on('error', errorLog)
    .pipe(gulp.dest('app/'));
});

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: true,
      open: "index.html"
    }));
});

gulp.task('watch', ['styles', 'scripts'], function() {
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/sass/**/*.scss', ['styles']);
});