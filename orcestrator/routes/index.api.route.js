const express = require('express');
const router = express.Router();

module.exports = router
  .use('/movies', require('./movie.api.route'))
  .use('/series', require('./series.api.route'))