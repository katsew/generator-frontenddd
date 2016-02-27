gulp = require 'gulp'
mainBowerFiles = require 'gulp-main-bower-files'
uglify = require 'gulp-uglify'
paths = require('../config').paths

gulp.task 'bower', () ->
  return gulp.src ["bower.json"]
    .pipe mainBowerFiles({
      overrides: {
        'jquery': {
          main: [
            './dist/*.min.js'
          ]
        }
      }
    })
    .pipe gulp.dest "#{paths.dest.bower}"
