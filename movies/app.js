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

// Mongoose
const dbURL = `mongodb://localhost/Movies`
mongoose.connect(dbURL, (err) => {
  err ? console.log(`Upps database movies ada error`) : console.log('Database movies is connected')
})

// Router
const index = require('./routes/movies.routes')

app.use('/', index)

module.exports = app;
