const express = require('express');
const router = express.Router();

// import model (Review)
const { Review } = require('../models');

// Routes
// http://localhost:4000/Review/
router.get('/', async (req, res) => {
  try {
    const allReviews = await Review.find({});
    res.status(200).json(allReviews);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Review/
router.post('/', async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Review/:id - GET
router.get('/:id', async (req, res) => {
  try {
    const foundReview = await Review.findById(req.params.id);
    res.status(200).json(foundReview);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Review/:id - DELETE
router.delete('/:id', async (req, res) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedReview);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Review/:id - PUT
router.put('/:id', async (req, res) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    res.status(200).json(updatedReview);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
