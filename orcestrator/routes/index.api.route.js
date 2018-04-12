const express = require('express');
const router = express.Router();
const { cache } = require('../middlewares/cache');

module.exports = router
  .use(cache)
  .use('/movies', require('./movie.api.route'))
  .use('/series', require('./series.api.route'))