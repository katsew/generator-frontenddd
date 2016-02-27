gulp = require 'gulp'
imagemin = require 'gulp-imagemin'
rename = require 'gulp-rename'
paths = require('../config').paths

gulp.task 'image', ['clean:image'], () ->
  return gulp.src ["#{paths.src.image}/**/*"]
    .pipe imagemin()
    .pipe gulp.dest "#{paths.dest.image}"

gulp.task 'image:copy', ['clean:image:original'], () ->
  return gulp.src ["#{paths.src.image}/**/*"]
    .pipe rename (path) ->
      dirs = path.dirname.split('/')
      dirs.shift()
      path.dirname = dirs.join('/')
      return path
    .pipe gulp.dest "#{paths.src.assets}/image"
