const express = require('express');
const router = express.Router();
const yelp = require('yelp-fusion');
const colors = require('colors');

const clientId = '8xy9aIO4XHRJ2NbUrk6hVg';
const clientSecret = 'ncT1TviyAzKkEgcc1jdQ1csWcKMoWiXNTlWUTRmiXJ9uiw7tOlOaEhxFq1Mrc2WQ';
let client;

//get access token
yelp.accessToken(clientId, clientSecret).then(response => {
  const token = response.jsonBody.access_token;
  client = yelp.client(token);
}).catch(e => {
  throw err;
});

router.post('/', (req, res, next) => {
  var searchCriteria = req.body;

  if(client) {
    client.search(searchCriteria)
    .then((results) => {
      res.status(200);
      res.json(results.jsonBody);
    })
    .catch((err) => {
      throw err;
    })
  } else {
    console.log(colors.blue('yelp client is not ready'));
  }
})

module.exports = router;
