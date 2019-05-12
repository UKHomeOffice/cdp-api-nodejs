'use strict';

const restify = require('lev-restify');

module.exports = (req, res, next) =>
  next(new restify.errors.NotImplementedError('IMPLEMENT ME'));
