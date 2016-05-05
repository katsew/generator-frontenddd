'use strict';

const current = process.cwd();
const path = require('path');
const entries = require('../entries.js');

module.exports = {
  entry: entries,
  output: {
    path: path.join(current, '/../public/assets/js'),
    filename: '[name]/index.js',
    chunkFilename: '[id].js'
  },
  cache: false,
  watch: false,
  debug: false,
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
