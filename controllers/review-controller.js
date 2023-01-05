const express = require('express');
const router = express.Router();

// import model (Review)
const { Review } = require('../models');

const db = require('../models'); // db.Review
// const Review = require('../models/Review')

console.log(Review);

// Routes
// http://localhost:4000/Review/
router.get('/', async (req, res) => {
  // res.status(200).json({message: "Review index/get route"})
  try {
    const allReview = await Review.find({});
    res.status(200).json(allReview);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Review/
router.post('/', async (req, res) => {
  console.log('post route', req.body);
  res.status(201).json({ message: 'Review create/post route' });

  try {
    //
    const newReview = await Review.create(req.body);
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Review/:id - GET
router.get('/:id', async (req, res) => {
  // res.status(200).json({message: "Review show/get route /Review/"+req.params.id})
  try {
    const foundReview = await Review.findById(req.params.id);
    res.status(200).json(foundReview);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
// http://localhost:4000/Review/:id - DELETE
router.delete('/:id', async (req, res) => {
  // res.status(200).json({message: "Review destroy/delete route /Review/"+req.params.id})
  try {
    const deletedReview = await Review.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedReview);
  } catch (err) {
    // console.log(err)
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Review/:id - PUT
router.put('/:id', async (req, res) => {
  // res.status(200).json({message: "Review update/put route /Review/"+req.params.id})
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
