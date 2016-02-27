gulp = require 'gulp'
webpack = require 'webpack-stream'
paths = require('../config').paths
plumber = require 'gulp-plumber'
config = {
  dev: require('../../webpack/development/webpack.config.js'),
  production: require('../../webpack/production/webpack.config.js')
}

gulp.task 'webpack:dev', ->
  gulp.src("#{paths.src.babel}/core.js")
    .pipe(plumber())
    .pipe(webpack(config.dev))
    .pipe(gulp.dest("#{paths.dest.js}"))

gulp.task 'webpack:release', ->
  gulp.src("#{paths.src.babel}/core.js")
    .pipe(plumber())
    .pipe(webpack(config.production))
    .pipe(gulp.dest("#{paths.dest.js}"))
