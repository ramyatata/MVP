const express = require('express');
const router = express.Router();
const db = require('../db/index.js');
const colors = require('colors');

//get all
router.get('/', (req, res) => {
  db.restaurants.findAll({})
  .then((restaurants) => {
    res.status(200);
    res.json(restaurants);
  })
  .catch((err) => {
    throw err;
  })
});

//get by id
router.get('/:id', (req, res) => {
  const userId = req.params.id;

  db.restaurants.findById(userId)
  .then((resultRestaurant) => {
    res.status(200);
    res.json(resultRestaurant);
  })
  .catch((err) => {
    throw err;
  })
});

//create
router.post('/', (req, res) => {
  const body = req.body;

  db.restaurants.create(body)
  .then((newRestaurants) => {
    res.status(201);
    res.json(newRestaurants);
  })
  .catch((err) => {
    throw err;
  })
});

//update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  db.restaurants.update(updates, {
    where: {
      id: id
    }
  })
  .then((updatedRestaurant) => {
    res.status(200);
    res.json(updatedUser);
  })
  .catch((err) => {
    throw err;
  })
});

//delete
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db.restaurants.destroy({
    where:{
      id: id
    }
  })
  .then((destroyedRestaurant) => {
    res.status(200);
    res.json(destroyedRestaurant);
  })
  .catch((err) => {
    throw err;
  })
});

module.exports = router;