const express = require('express');
const router = express.Router();
const user = require('./db/index.js');


router.get('/', function(req, res, next){
  res.status(200);
  res.send('Success');
});

module.exports = router;