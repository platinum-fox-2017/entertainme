const express = require('express');
const router = express.Router();
const { addSeries, loadSeries, updateSeries, dropSeries } = require('../controllers/series.api.controller');
const { cacheSeries } = require('../middlewares/cache');

module.exports = router
  .use(cacheSeries)
  .get('/', loadSeries)
  .post('/', addSeries)
  .put('/:id', updateSeries)
  .delete('/:id', dropSeries)