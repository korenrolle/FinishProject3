const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema({
  text: {
    type: String
  },
  comments: [
    {
      type: String,
      ref: 'Comment'
    }
  ]
});
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
