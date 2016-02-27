gulp = require 'gulp'
rimraf = require 'rimraf'
paths = require('../config').paths

gulp.task 'clean', (cb) ->
  rimraf("./../public/**", cb)

gulp.task 'clean:image', (cb) ->
  rimraf("./../public/assets/image/**", cb)

gulp.task 'clean:image:original', (cb) ->
  rimraf("#{paths.src.assets}/image/**", cb)