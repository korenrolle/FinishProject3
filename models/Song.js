const mongoose = require('mongoose');

const SongSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    artist: { type: String, required: true },
    song: { type: mongoose.SchemaTypes.String, required: true }, // Change to URL type
    description: { type: String, required: true },
    image: String
  },
  { timestamps: true }
);
