const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

mongoose.connect('mongodb://thepurge:12345@ds143039.mlab.com:43039/microservices');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use('/', index);

module.exports = app;
