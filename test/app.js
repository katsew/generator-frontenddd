'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('generator-frontenddd:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({someOption: true})
      .withPrompts({someAnswer: true})
      .on('end', done)
      .on('error', done)
      .on('timeout', done);
  });

  it('creates files', function () {
    assert.file([
      'README.md',
      'gulpfile.coffee',
      'circle.yml',
      '.editorconfig',
      '.gitignore',
      'package.json',
      'bower.json'
    ]);
  });
});
