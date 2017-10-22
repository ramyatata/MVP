'use strict';

var express = require('express');
var router = express.Router();
var db = require('../db/index.js');
var colors = require('colors');

router.get('/', function (req, res, next) {
  db.favourites.findAll({
    include: [{
      model: db.users
    }]
  }).then(function (users) {
    res.status(200);
    res.json(users);
  }).catch(function (err) {
    throw err;
  });
});

module.exports = router;