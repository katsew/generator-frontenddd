'use strict';

const core = require('../core');
const expect = require('chai').expect;

describe('Test Core module', () => {

  it('Should be frozen', () => {
    expect(Object.isFrozen(core)).to.equal(true);
  });

});
