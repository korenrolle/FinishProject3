const express = require('express');
const router = express.Router();

// import model (Comment)
const { Comment } = require('../models');

const db = require('../models'); // db.Comment
// const Comment = require('../models/Comment')

console.log(Comment);

// Routes
// http://localhost:4000/Comment/
router.get('/', async (req, res) => {
  res.status(200).json({ message: 'Comment index/get route' });
  try {
    const allComment = await Comment.find({});
    res.status(200).json(allComment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Comment/
router.post('/', async (req, res) => {
  console.log('post route', req.body);
  res.status(201).json({ message: 'Comment create/post route' });

  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Comment/:id - GET
router.get('/:id', async (req, res) => {
  res
    .status(200)
    .json({ message: 'Comment show/get route /Comment/' + req.params.id });
  try {
    const foundComment = await Comment.findById(req.params.id);
    res.status(200).json(foundComment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
// http://localhost:4000/Comment/:id - DELETE
router.delete('/:id', async (req, res) => {
  res.status(200).json({
    message: 'Comment destroy/delete route /Comment/' + req.params.id
  });
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedComment);
  } catch (err) {
    // console.log(err)
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Like/:id - PUT
router.put('/:id', async (req, res) => {
  res
    .status(200)
    .json({ message: 'Like update/put route /Like/' + req.params.id });
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
