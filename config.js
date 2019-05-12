'use strict';

const pkg = require('./package.json');

module.exports = {
  name: pkg.name,
  httpd: {
    host: process.env['LISTEN_HOST'] || '0.0.0.0',
    port: process.env['LISTEN_PORT'] || 8080
  }
};
