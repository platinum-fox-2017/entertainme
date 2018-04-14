const express = require('express');
const router = express.Router();
const { loadAll } = require('../controllers/entertainme.api.controller');
const { cacheMovies, cacheSeries } = require('../middlewares/cache');

module.exports = router
  .get('/entertainme', cacheMovies, cacheSeries, loadAll)
  .use('/movies', require('./movie.api.route'))
  .use('/series', require('./series.api.route'))