const express = require('express');
const router = express.Router();
const { addSeries, loadSeries, updateSeries, dropSeries } = require('../controllers/series.api.controller');

module.exports = router
  .get('/', loadSeries)
  .post('/', addSeries)
  .put('/:id', updateSeries)
  .delete('/:id', dropSeries)