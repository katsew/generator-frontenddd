'use strict';

const path = require('path');
const current = process.cwd();
module.exports = {
  core: [
    'babel-polyfill',
    path.join(current, 'assets/babel/core/index')
  ]
};
