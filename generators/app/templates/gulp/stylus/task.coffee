gulp = require 'gulp'
stylus = require 'gulp-stylus'
autoPrefixer = require 'gulp-autoprefixer'
csscomb = require 'gulp-csscomb'
cssmin = require 'gulp-cssmin'
gzip = require 'gulp-gzip'
replace = require 'gulp-replace'
nib = require 'nib'
paths = require('../config').paths
plumber = require 'gulp-plumber'


gulp.task 'stylus', () ->
  return gulp.src ["#{paths.src.stylus}/**/!(_)*.styl"]
    .pipe plumber()
    .pipe stylus
      compress: true
      use: [nib()]
    .pipe replace(/CONST_IMAGE_HOST/g, 'localhost')
    .pipe autoPrefixer({
      browsers: ['last 3 version', 'Android 2.3']
    })
    .pipe csscomb()
    .pipe cssmin()
    .pipe gulp.dest "#{paths.dest.css}"
    .pipe gzip({ append: true })
    .pipe gulp.dest "#{paths.dest.css}"
