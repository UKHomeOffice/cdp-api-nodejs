'use strict';

const config = require('../config');
const httpd = require('./lib/httpd');
const log = require('./lib/logger');
const restify = require('lev-restify');

const notImplemented = (req, res, next) =>
  next(new restify.errors.NotImplementedError('Not implemented'));

const readiness = require('./routes/readiness');

httpd.get('/', notImplemented);
httpd.get('/readiness', readiness);

httpd.listen(config.httpd.port, config.httpd.host, () => {
  log.info('%s listening at %s', httpd.name, httpd.url);
});
