const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    song: { type: Object, required: true },
    description: { type: String, required: true },
    image: String
  },
  { timestamps: true }
);

const Song = mongoose.model('Song', SongSchema);

module.exports = Song;
