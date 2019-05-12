'use strict';

const config = require('../../config');
const restify = require('lev-restify');

module.exports = restify.createServer({
  name: config.name
});
