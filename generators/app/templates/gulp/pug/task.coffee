gulp = require 'gulp'
pug = require 'gulp-pug'
paths = require('../config').paths

gulp.task 'pug', () ->
  gulp.src ["#{paths.src.pug}/**/!(_)*.pug", "!#{paths.src.pug}/layout/*.pug", "!#{paths.src.pug}/include/*.pug"]
    .pipe pug
      pretty: true
    .pipe gulp.dest "#{paths.dest.html}"
