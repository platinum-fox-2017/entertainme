const express = require('express');
const router = express.Router();
const tvseriesController = require('../controllers/TvSeriesController')

router.post('/', tvseriesController.createTvSeries)
router.put('/:id', tvseriesController.updateTvSeries)
router.delete('/:id', tvseriesController.deleteTvSeries)

module.exports = router