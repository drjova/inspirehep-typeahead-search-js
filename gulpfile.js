var gulp = require('gulp');
var path = require('path');
var plugins = require('gulp-load-plugins')();

// Root directory
var rootDirectory = path.resolve('./');

/**
 * Demo
 */

// run the demo
gulp.task('demo', function() {
  gulp.src(rootDirectory)
    .pipe(plugins.webserver({
      livereload: true,
      open: '/example/index.html'
  }));
});
