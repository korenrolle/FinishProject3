require('dotenv').config();
const { PORT } = process.env;
const express = require('express');
const app = express();

// app dependencies
const cors = require('cors');
const morgan = require('morgan');

// controller imports
const userController = require('./controllers/user-controller');
const songController = require('./controllers/song-controller');
const reviewController = require('./controllers/review-controller');
const likeController = require('./controllers/like-controller');

require('./config/db.connection'); // node runs all of the code in db.connection

// express / app middleware
app.use(express.json());

// cors helper function
app.use(cors()); // allows for cross origin request - open channel
// morgan request logger (for dev)
app.use(morgan('dev'));
// router middleware
app.use('/user', userController);
app.use('/song', songController);
app.use('/review', reviewController);
app.use('/like', likeController);

// root - home / index route for api - redirects to the user index route
app.get('/', (req, res) => res.redirect('/user'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
