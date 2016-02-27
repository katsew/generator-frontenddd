"use strict";
const path = require('path');
const current = process.cwd();
const webpack = require('webpack');
const entries = require('../entries.js');

module.exports = {
  entry: entries,
  output: {
    path: path.join(current, '/../public/assets/js'),
    filename: "[name]/index.js",
    chunkFilename: "[id].js"
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  cache: false,
  watch: true,
  debug: true,
  devtool: "#source-map",
  stats: {
      colors: true,
      reasons: false
  }
};
