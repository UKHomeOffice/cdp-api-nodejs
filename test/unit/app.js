'use strict';

const proxyquire = require('proxyquire');

const getStub = sinon.stub();
const listenStub = sinon.stub();

const app = proxyquire('../../src/app', {
    './lib/httpd.js': {
      get: getStub,
      listen: listenStub
    }
  });

describe('app.js', () => {
  const subject = app;

  it('sets up routes', () => getStub.should.have.been.called);
  it('starts the web server', () => listenStub.should.have.been.called);
});
