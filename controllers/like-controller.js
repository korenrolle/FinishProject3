const express = require('express');
const router = express.Router();

// import model (Like)
const { Like } = require('../models');

const db = require('../models'); // db.Like
// const Like = require('../models/Like')

console.log(Like);

// Routes
// http://localhost:4000/Like/
router.get('/', async (req, res) => {
  // res.status(200).json({message: "Like index/get route"})
  try {
    const allLike = await Like.find({});
    res.status(200).json(allLike);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Like/
router.post('/', async (req, res) => {
  console.log('post route', req.body);
  res.status(201).json({ message: 'Like create/post route' });

  try {
    //
    const newLike = await Like.create(req.body);
    res.status(201).json(newLike);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Like/:id - GET
router.get('/:id', async (req, res) => {
  // res.status(200).json({message: "Like show/get route /Like/"+req.params.id})
  try {
    const foundLike = await Like.findById(req.params.id);
    res.status(200).json(foundLike);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
// http://localhost:4000/Like/:id - DELETE
router.delete('/:id', async (req, res) => {
  // res.status(200).json({message: "Like destroy/delete route /Like/"+req.params.id})
  try {
    const deletedLike = await Like.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedLike);
  } catch (err) {
    // console.log(err)
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Like/:id - PUT
router.put('/:id', async (req, res) => {
  // res.status(200).json({message: "Like update/put route /Like/"+req.params.id})
  try {
    const updatedLike = await Like.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json(updatedLike);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
