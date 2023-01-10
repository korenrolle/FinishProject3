const Post = require('../models/Post');
const router = require('express').Router();

router.post('/', (req, res) => {
  // Validate the request
  if (!req.body.userId || !req.body.text) {
    return res.status(400).send({ error: 'Invalid request' });
  }

  // Create the post
  const newPost = new Post({
    user: req.body.userId,
    text: req.body.text
  });
  newPost.save((error) => {
    if (error) {
      return res.status(500).send({ error: 'Error saving post' });
    }
    return res.send({ message: 'Post created successfully' });
  });
});
module.exports = router;
