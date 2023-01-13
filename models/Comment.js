const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    name: { type: String },
    comment: String
  },
  { timestamps: true }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
