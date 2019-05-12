'use strict';

const logger = require('../../../src/lib/logger');

const itIsALogFunction = x => {
  it('is a function', () => (typeof x).should.equal('function'));
};

describe('lib/logger.js', () => {
  const subject = logger;

  it('is an object', () => (typeof subject).should.equal('object'));

  describe('.error()', () => itIsALogFunction(logger.error));
  describe('.warn()', () => itIsALogFunction(logger.warn));
  describe('.info()', () => itIsALogFunction(logger.info));
  describe('.debug()', () => itIsALogFunction(logger.debug));
});
