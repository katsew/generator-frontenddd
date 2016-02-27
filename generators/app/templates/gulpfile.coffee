gulp = require 'gulp'
runSequence = require 'run-sequence'
gulp._maxListeners = 30

requireDir = require 'require-dir'
dir = requireDir('./gulp', {recurse: true})

gulp.task 'dev', ->
  runSequence(
    ['jade', 'stylus', 'webpack:dev'],
    ['watch', 'browserSync']
  )

gulp.task 'watch:all', ->
  runSequence(['watch', 'browserSync'])

gulp.task 'release', ->
  runSequence(
    ['jade', 'stylus', 'webpack:release']
  )

gulp.task 'default', ->
  runSequence(
    ['jade', 'stylus', 'webpack:dev'],
    ['watch', 'browserSync']
  )
