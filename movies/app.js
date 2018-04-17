var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://agnynureza:12345@ds133856.mlab.com:33856/microservice', err => {
  if(!err) console.log('Movies connected to database !')
  else throw new error(err)
})

var index = require('./routes/movies');
const tag = require('./routes/tag')


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.use('/', index);
app.use('/tag', tag)

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
  res.render('error');
});

module.exports = app;
