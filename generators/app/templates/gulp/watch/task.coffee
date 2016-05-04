gulp = require 'gulp'
watch = require 'gulp-watch'
paths = require('../config').paths
runSequence = require 'run-sequence'

gulp.task 'watch', () ->

  watch ["#{paths.src.babel}/**/*.js"], () ->
    runSequence('webpack:dev')

  watch ["#{paths.src.pug}/**/!(_)*.pug"], () ->
    runSequence('pug')

  watch ["#{paths.src.stylus}/**/!(_)*.styl"], () ->
    runSequence('stylus')
