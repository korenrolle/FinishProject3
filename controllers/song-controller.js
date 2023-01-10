const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

// Create a new song
router.post('/', async (req, res) => {
  try {
    const newSong = new Song(req.body);
    await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all songs
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
