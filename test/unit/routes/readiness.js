'use strict';

const readiness = require('../../../src/routes/readiness');

describe('routes/readiness.js', () => {
  const subject = readiness;

  it('is a function', () => (typeof subject).should.equal('function'));
  it('is a middleware', () => subject.length.should.equal(3));

  describe('when called with three arguments', () => {
    describe('that are req, res and next objects', () => {
      let result;

      const req = {};
      const res = {
        send: sinon.stub()
      };
      const next = sinon.stub();

      before(() => {
        result = subject(req, res, next);
      });

      it('IS NOT YET IMPLEMENTED', () => next.should.have.been.called);
    });
  });
});
