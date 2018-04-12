const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')
// const redis = require('redis')
// const client = redis.createClient()
const mongoose = require('mongoose');

const index = require('./routes/index');
// const users = require('./routes/users');
const shows = require('./routes/shows');

const app = express();

// Mongoose
mongoose.connect('mongodb://localhost/shows_micro');

// // redis
// client.on('ready', () => {
//   console.log('Redis is Ready');
// })
// client.on('error', (err) => {
//   console.log('Redis Error, ', err);
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
// app.use('/users', users);
app.use('/shows', shows);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
