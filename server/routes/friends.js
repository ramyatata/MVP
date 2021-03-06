const express = require('express');
const router = express.Router();
const db = require('../db/index.js');
const colors = require('colors');

//get all
router.get('/', (req, res) => {
  db.friendsRelationship.findAll({})
  .then((friends) => {
    res.status(200);
    res.json(friends);
  })
  .catch((err) => {
    throw err;
  })
});

//get by friendId
router.get('/:id', (req, res) => {
  // const id = req.params.id;
  // db.friends.findById(id)
  // .then(()=>{})

});

//create
router.post('/', (req, res) => {
  const body = req.body;
  db.friendsRelationship.create(body)
  .then((newFriend) => {
    res.status(201);
    res.json(newFriend);
  })
  .catch((err) => {
    throw err;
  })
});

//update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  db.friendsRelationship.update(updates, {
    where: {
      id: id
    }
  })
  .then((updatedFriend) => {
    res.status(200);
    res.json(updatedFriend);
  })
  .catch((err) => {
    throw err;
  })
});

//delete
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  db.friendsRelationship.destroy({
    where:{
      id: id
    }
  })
  .then((destroyedFriend) => {
    res.status(200);
    res.json(destroyedFriend);
  })
  .catch((err) => {
    throw err;
  })
});

module.exports = router;