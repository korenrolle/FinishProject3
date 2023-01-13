const express = require('express');
const app = express();

// Mongoose is a Object Data Modeling (ODM) library for
// MongoDB distributed as an npm package.
const mongoose = require('mongoose');

// configures and gives access to .env file object

// app dependencies
const cors = require('cors');
const morgan = require('morgan');

// controller imports
const postController = require('./controllers/post-controller');
const commentController = require('./controllers/comment-controller');

// database connection
require('./config/db.connection');
require('dotenv').config();

const { PORT } = process.env;

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
app.use('/posts', postController);

// root route
// app.get('/', (req, res) => res.redirect('/Post'));

// start server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
