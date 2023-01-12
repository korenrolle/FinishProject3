const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  likes: {
    type: Number,
    default: 0
  },
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Comment'
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const post = mongoose.model('post', postSchema);

module.exports = mongoose.model('post', postSchema);
