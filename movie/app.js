require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3001;
const client = require('redis').createClient();

mongoose.connect(`mongodb://admin:admin@ds143039.mlab.com:43039/entertainme`, err => {
  err ? console.log('error: ', err) : console.log('connect db');
});

client.on("ready", err => {
  err ? console.log('error: ', err) : console.log('redis ready');
});

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes/movie.route'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
})