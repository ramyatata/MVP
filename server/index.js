const express = require('express');
const app = express();
const colors = require('colors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

//routes
const usersRoute = require('./routes/users');
const favouritesRoute = require('./routes/favourites');
const friendsRoute = require('./routes/friends');
const restaurantsRoute = require('./routes/restaurants');

const port = process.env.PORT || 8088;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin': '*');
  res.setHeader('Access-Control-Allow-Methods': 'POST, GET, DELETE, PUT, OPTIONS');
});
console.log(colors.blue(__dirname));
app.use(express.static(path.join(__dirname, '/client')));
app.use('/users', usersRoute);
app.use('/favourites', favouritesRoute);
app.use('/friends', friendsRoute);
app.use('/restaurants', restaurantsRoute);


//error-handling middleware
app.use((err, req, res, next)=>{
  console.log(colors.green(err.stack));
  res.status(500);
  res.send('something broke!');
});


app.listen(port, function(){
  console.log(`listening on port  ${port}`);
});



