'use strict';

var express = require('express');
var router = express.Router();
var user = require('./db/index.js');

router.get('/', function (req, res, next) {
  res.status(200);
  res.send('Success');
});

module.exports = router;