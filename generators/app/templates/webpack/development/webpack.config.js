"use strict";
const _ = require('lodash');
const base = require('./base.js');
const loaders = require('./loader.js');
const plugins = require('./plugin.js');

module.exports = _.merge({}, base, loaders, plugins);
