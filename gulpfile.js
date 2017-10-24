var gulp = require('gulp'),
  webserver = require('gulp-webserver'),
  morgan = require('morgan');
  
gulp.task('default', function() {
//later, we will need this
});

var logger = morgan('\x1b[36m:method :status \x1b[0m(:response-time ms) [:date[clf]] :url (size: :res[content-length])');
gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      port:8080,
      host:"0.0.0.0",
      livereload: false,
      directoryListing: false,
      open: false,
      middleware: logger
    }));
});

gulp.task('default', ['webserver']);
gulp.task('ws', ['webserver']);