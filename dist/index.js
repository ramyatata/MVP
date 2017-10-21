'use strict';

var express = require('express');
var app = express();
var colors = require('colors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = require('./routes.js');

var port = process.env.PORT || 8000;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);

app.listen(port, function () {
  console.log('listening on port  ' + port);
});