var gulp = require('gulp');
var minify = require('gulp-minify');

gulp.task('minify', function() {
  gulp.src('js/main.js')
  	.pipe(minify({

  	}))


});