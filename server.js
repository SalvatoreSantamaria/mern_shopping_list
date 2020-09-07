//use NPM run server to start

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());

const items = require('./routes/api/items')

//Mongodb URI DB Config
const db = require('./configuration/keys').mongoURI

//Connect to MongoDB with Mongoose
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected!'))
  .catch(err => console.log(err))

  // process.env.PORT for connecting to Heroku
  const port = process.env.PORT || 5000;

  //Use Routes
  app.use('/api/items', items);

  app.listen(port, () => console.log(`Server started on port ${port}`))