const express = require('express');
const router = express.Router();

// import model (User)
const { User } = require('../models');

const db = require('../models'); // db.User
// const User = require('../models/User')

console.log(User);

// Routes
// http://localhost:4000/User/
router.get('/', async (req, res) => {
  // res.status(200).json({message: "User index/get route"})
  try {
    const allUser = await User.find({});
    res.status(200).json(allUser);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/User/
router.post('/', async (req, res) => {
  // console.log('post route', req.body)
  // res.status(201).json({message: "User create/post route"})

  try {
    //
    const newPerson = await User.create(req.body);
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/User/:id - GET
router.get('/:id', async (req, res) => {
  // res.status(200).json({message: "User show/get route /User/"+req.params.id})
  try {
    const foundPerson = await User.findById(req.params.id);
    res.status(200).json(foundPerson);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
// http://localhost:4000/User/:id - DELETE
router.delete('/:id', async (req, res) => {
  // res.status(200).json({message: "User destroy/delete route /User/"+req.params.id})
  try {
    const deletedPerson = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedPerson);
  } catch (err) {
    // console.log(err)
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/User/:id - PUT
router.put('/:id', async (req, res) => {
  // res.status(200).json({message: "User update/put route /User/"+req.params.id})
  try {
    const updatedPerson = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedPerson);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
