'use strict';

const httpd = require('../../../src/lib/httpd');

describe('lib/httpd.js', () => {
  const subject = httpd;

  it('is an object', () => (typeof subject).should.equal('object'));
});
