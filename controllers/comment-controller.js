const express = require('express');
const router = express.Router();

// import model (Comment)
const { Comment } = require('../models');

// Routes
// http://localhost:4000/Comment/
router.get('/', async (req, res) => {
  try {
    const allComments = await Comment.find({});
    res.status(200).json(allComments);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Comment/
router.post('/', async (req, res) => {
  try {
    // create a new comment
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Comment/:id - GET
router.get('/:id', async (req, res) => {
  try {
    const foundComment = await Comment.findById(req.params.id);
    res.status(200).json(foundComment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Comment/:id - DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deletedComment = await Comment.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedComment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Comment/:id - PUT
router.put('/:id', async (req, res) => {
  try {
    const updatedComment = await Comment.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json(updatedComment);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
