const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const entertainme = require('./routes/entertainme');
const movie = require('./routes/movie');
const tv = require('./routes/tv');


app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());

app.use('/entertainme', entertainme);
app.use('/movie', movie);
app.use('/tv', tv);

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
