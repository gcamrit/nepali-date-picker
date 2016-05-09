var gulp       = require("gulp");
var babel      = require("gulp-babel");
var concat     = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');

gulp.task("default", function () {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('all.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
});
