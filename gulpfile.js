var gulp = require('gulp');
var stylus = require('gulp-stylus');
 
 
// Get one .styl file and render 
gulp.task('styles', function () {
  return gulp.src('style/style.styl')
    .pipe(stylus())
    .pipe(gulp.dest('css'));
});
 
// Options 
// Options compress 
gulp.task('compress', function () {
  return gulp.src('./css/compressed.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./css/build'));
});
 
 
// Set linenos 
gulp.task('linenos', function () {
  return gulp.src('./css/linenos.styl')
    .pipe(stylus({linenos: true}))
    .pipe(gulp.dest('./css/build'));
});
 
// Include css 
// Stylus has an awkward and perplexing 'include css' option 
gulp.task('include-css', function() {
  return gulp.src('./css/*.styl')
    .pipe(stylus({
      'include css': true
    }))
    .pipe(gulp.dest('./'));
 
});
 
// Inline sourcemaps 
gulp.task('sourcemaps-inline', function () {
  return gulp.src('./css/sourcemaps-inline.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css/build'));
});
 
gulp.task('watch:styles', function() {
    gulp.watch('**/*.styl', ['styles']);
});

// Default gulp task to run 
gulp.task('default', ['styles', 'compress', 'linenos', 'watch:styles']);
 