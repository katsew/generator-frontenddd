'use strict';

const debug = require('debug')('core:*');
const constants = require('./constants.js');

const core = {
  constants: constants
};
debug(core);

module.exports = Object.freeze(core);
