const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const redis = require('redis');
const client = redis.createClient()

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);

module.exports = app;
