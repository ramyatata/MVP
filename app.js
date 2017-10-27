const express = require('express');
const app = express();
const colors = require('colors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

//routes
const usersRoute = require('./server/routes/users');
const favouritesRoute = require('./server/routes/favourites');
const friendsRoute = require('./server/routes/friends');
const restaurantsRoute = require('./server/routes/restaurants');
const yelpRoute = require('./server/routes/yelp');

const port = process.env.PORT || 8088;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
  next();
});

app.use('/', express.static(path.join(__dirname, '/client')));

app.use('/users', usersRoute);
app.use('/favourites', favouritesRoute);
app.use('/friends', friendsRoute);
app.use('/restaurants', restaurantsRoute);
app.use('/yelp', yelpRoute);

//error-handling middleware
app.use((err, req, res, next)=>{
  console.log(colors.green(err.stack));
  res.status(500);
  res.send('something broke!');
});


app.listen(port, function(){
  console.log(`listening on port  ${port}`);
});



