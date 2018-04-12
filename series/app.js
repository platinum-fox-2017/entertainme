var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mongoose Connect
const dburl = `mongodb://localhost/Series`
mongoose.connect(dburl, (err) => {
  err ? console.log(`Upps database series error`) : console.log(`Database series is connected`)
})

const index = require('./routes/index')

app.use('/', index);

module.exports = app;
