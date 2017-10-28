const express = require('express');
const router = express.Router();
const db = require('../db/index.js');
const colors = require('colors');

//get all
router.get('/', (req, res) => {
  console.log(colors.blue('calling users table'));
  db.users.findAll({})
  .then((users) => {
    res.status(200);
    res.json(users);
  })
  .catch((err) => {
    throw err;
  })
});

//get by id
router.get('/:id', (req, res) => {
  const id = req.params.id;

  db.users.findById(id)
  .then((resultUser) => {
    res.status(200);
    res.json(resultUser);
  })
  .catch((err) => {
    throw err;
  })
});

//create
router.post('/', (req, res) => {
  const body = req.body;

  db.users.create(body)
  .then((newUser) => {
    res.status(201);
    res.json(newUser);
  })
  .catch((err)=>{
    throw err;
  })
});

//update
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  db.users.update(updates, {
    where: {
      id: id
    }
  })
  .then((updatedUser) => {
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

  db.users.destroy({
    where:{
      id: id
    }
  })
  .then((destroyedUser) => {
    res.status(200);
    res.json(destroyedUser);
  })
  .catch((err) => {
    throw err;
  })
});

//create
router.post('/login', (req, res) => {
  const body = req.body;

  db.users.find({where:{'userName': req.body.userName, 'password':req.body.password}})
  .then((user) => {
    res.status(201);
    res.json(user);
  })
  .catch((err) => {
    throw err;
  })
});

module.exports = router;