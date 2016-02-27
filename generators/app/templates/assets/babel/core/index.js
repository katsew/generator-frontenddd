'use strict';

const debug = require('debug')('core:*');
const constants = require('./constants.js');

const core = {
  constants: constants
};

module.exports = Object.freeze(core);
