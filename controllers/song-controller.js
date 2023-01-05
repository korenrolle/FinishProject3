const express = require('express');
const router = express.Router();

// import model (Song)
const { Song } = require('../models');

const db = require('../models'); // db.Song
// const Song = require('../models/Song')

console.log(Song);

// Routes
// http://localhost:4000/Song/
router.get('/', async (req, res) => {
  // res.status(200).json({message: "Song index/get route"})
  try {
    const allSong = await Song.find({});
    res.status(200).json(allSong);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Song/
router.post('/', async (req, res) => {
  console.log('post route', req.body);
  res.status(201).json({ message: 'Song create/post route' });

  try {
    //
    const newSong = await Song.create(req.body);
    res.status(201).json(newSong);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Song/:id - GET
router.get('/:id', async (req, res) => {
  // res.status(200).json({message: "Song show/get route /Song/"+req.params.id})
  try {
    const foundSong = await Song.findById(req.params.id);
    res.status(200).json(foundSong);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
// http://localhost:4000/Song/:id - DELETE
router.delete('/:id', async (req, res) => {
  // res.status(200).json({message: "Song destroy/delete route /Song/"+req.params.id})
  try {
    const deletedSong = await Song.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedSong);
  } catch (err) {
    // console.log(err)
    res.status(400).json({ error: err });
  }
});

// http://localhost:4000/Song/:id - PUT
router.put('/:id', async (req, res) => {
  // res.status(200).json({message: "Song update/put route /Song/"+req.params.id})
  try {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.status(200).json(updatedSong);
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = router;
