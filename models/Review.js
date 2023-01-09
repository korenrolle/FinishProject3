const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    content: {
      type: String,
      required: [true, 'You must provide a reason for your review score.']
    },
    // relationship to product
    song: {
      type: mongoose.Types.ObjectId,
      ref: 'Song'
    }
  },
  { timestamps: true }
);

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;
