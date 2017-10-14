var gulp = require('gulp'), webserver = require('gulp-webserver');
gulp.task('default', function() {
//later, we will need this
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      port:8080,
      host:"0.0.0.0",
      livereload: false,
      directoryListing: false,
      open: false
    }));
});

gulp.task('default', ['webserver']);
gulp.task('ws', ['webserver']);