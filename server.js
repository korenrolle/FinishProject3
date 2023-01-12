require('dotenv').config();
const express = require('express');
const app = express();

// app dependencies
const cors = require('cors');
const morgan = require('morgan');

// controller imports
const postController = require('./controllers/post-controller');

// database connection
require('./config/db.connection');

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
app.use('/api/posts', postController);

// root route
app.get('/', (req, res) => res.redirect('/api/users'));

// start server
const { PORT } = process.env;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
