'use strict';

var express = require('express');
var app = express();
var colors = require('colors');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//routes
var usersRoute = require('./routes/users');
var favouritesRoute = require('./routes/favourites');
var friendsRoute = require('./routes/friends');
var restaurantsRoute = require('./routes/restaurants');

var port = process.env.PORT || 8088;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use('/users', usersRoute);
app.use('/favourites', favouritesRoute);
app.use('/friends', friendsRoute);
app.use('/restaurants', restaurantsRoute);

app.get('/users/:id', function (req, res) {
  console.log(colors.blue(req.params.id));
  res.status(200);
  res.send(req.params.id);
});

//error-handling middleware
app.use(function (err, req, res, next) {
  console.log(colors.pink(err.stack));
  res.status(500);
  res.send('something broke!');
});

app.listen(port, function () {
  console.log('listening on port  ' + port);
});