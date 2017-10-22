'use strict';

var express = require('express');
var router = express.Router();
var db = require('../db/index.js');
var colors = require('colors');

//get by id
router.get('/:id', function (req, res) {
  var id = req.params.id;

  db.users.findOne({
    where: {
      id: id
    }
  }).then(function (user) {
    res.status(200);
    res.json(users);
  }).catch(function (err) {
    throw err;
  });
});

//get all
router.get('/', function (req, res) {
  db.users.findAll({}).then(function (users) {
    res.status(200);
    res.json(users);
  }).catch(function (err) {
    throw err;
  });
});

//create
router.post('/', function (req, res) {
  var body = req.body;

  db.users.create(body).then(function (user) {
    res.status(200);
    res.json(users);
  }).catch(function (err) {
    throw err;
  });
});

//update
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var updates = req.body;

  db.users.patch(updates, {
    where: {
      id: id
    }
  }).then(function (updatedUser) {
    res.status(200);
    res.json(updatedUser);
  }).catch(function (err) {
    throw err;
  });
});

//delete
router.get('/:id', function (req, res) {
  var id = req.params.id;

  db.users.destroy({
    where: {
      id: id
    }
  }).then(function (destroyedUser) {
    res.status(200);
    res.json(destroyedUser);
  }).catch(function (err) {
    throw err;
  });
});

module.exports = router;