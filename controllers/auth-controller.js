const express = require('express');

const route = express.Router();

const { User } = require('../models/');

const bcrypt = require('bcrypt');

// SIGN UP
// POST /auth/register
router.post('/register', async (req, res, next) => {});
try {
  const salt = await bcrypt.genSalt(10);
} catch (err) {
  res.status(400).json({
    err: err.message
  });
}

// SIGN IN
// POST /auth/login
router.post('/login', async (req, res, next) => {});

module.exports = router;
