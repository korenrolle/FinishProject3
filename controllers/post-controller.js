const Post = require('../models/post');
const router = require('express').Router();

router.post('/', (req, res) => {
  // Validate the request
  if (!req.body.text) {
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

router.get('/', async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
