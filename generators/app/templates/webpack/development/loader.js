'use strict';

module.exports = {
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel?presets[]=react,presets[]=es2015'
      },
      { test: /\.js$/, loader: 'webpack-strip?strip[]=console.log' }
    ]
  }
};
