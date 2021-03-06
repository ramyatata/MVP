const express = require('express');
const router = express.Router();
const db = require('../db/index.js');
const colors = require('colors');

//get all
router.get('/', (req, res) => {
  db.favourites.findAll({})
  .then((favourites) => {
    res.status(200);
    res.json(favourites);
  })
  .catch((err) => {
    throw err;
  })
});


//get by all fav restaurants of a user - id is userId
router.get('/:id', (req, res) => {
  const userId = req.params.id;

  db.favourites.findAll({
    where:{'userId': userId},
    include:[{ model: db.restaurants}]
  })
  .then((favouriteRestaurants) => {
    res.status(200);
    res.json(favouriteRestaurants);
  })
  .catch((err) => {
    throw err;
  })
});

//create
router.post('/', (req, res) => {
  const body = req.body;

  db.favourites.create(body)
  .then((newFavourite) => {
    res.status(201);
    res.json(newFavourite);
  })
  .catch((err)=>{
    throw err;
  })
});

//update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  db.favourites.update(updates, {
    where: {
      id: id
    }
  })
  .then((updatedFavourite) => {
    res.status(200);
    res.json(updatedFavourite);
  })
  .catch((err) => {
    throw err;
  })
});

//delete
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db.favourites.destroy({
    where:{
      id: id
    }
  })
  .then((destroyedFavourite) => {
    res.status(200);
    res.json(destroyedFavourite);
  })
  .catch((err) => {
    throw err;
  })
});

module.exports = router;