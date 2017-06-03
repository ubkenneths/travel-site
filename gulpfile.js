var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function() {
  console.log("Hooray - gulp task");
});

gulp.task('html', function() {
  console.log("something useful for html");
});

gulp.task('styles', function() {
  console.log("something useful for Sass or Post css");
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  })

  watch('./app/assets/styles/**/*.css', function() {
    gulp.start('styles');
  })

});
