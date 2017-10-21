const express = require('express');
const app = express();
const colors = require('colors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const router = require('./routes.js');

const port = process.env.PORT || 8088;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', router);


app.listen(port, function(){
  console.log(`listening on port  ${port}`);
});



