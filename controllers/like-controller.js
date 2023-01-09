const mongoose = require('mongoose');
const Like = mongoose.model('Like');
const Post = mongoose.model('Post');

function likePost(req, res) {
  // Validate the request
  if (!req.body.postId || !req.body.userId) {
    return res.status(400).send({ error: 'Invalid request' });
  }

  // Check if the post already has a like from the user
  Like.findOne(
    {
      user: req.body.userId,
      post: req.body.postId
    },
    (error, like) => {
      if (error) {
        return res
          .status(500)
          .send({ error: 'Error checking for existing like' });
      }
      if (like) {
        return res.status(400).send({ error: 'Post already liked by user' });
      }

      // Like the post
      const newLike = new Like({
        user: req.body.userId,
        post: req.body.postId
      });
      newLike.save((error) => {
        if (error) {
          return res.status(500).send({ error: 'Error saving like' });
        }

        // Update the post's like count
        Post.findByIdAndUpdate(
          req.body.postId,
          { $inc: { likes: 1 } },
          (error) => {
            if (error) {
              return res
                .status(500)
                .send({ error: 'Error updating post like count' });
            }
            return res.send({ message: 'Post liked successfully' });
          }
        );
      });
    }
  );
}
