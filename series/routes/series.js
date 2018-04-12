var express = require('express');
var router = express.Router();
var seriesController = require('../controllers/series.controller')
var { checkCache } = require('../middleware/cache')

router.get('/', checkCache, seriesController.getSeries)
router.post('/', checkCache, seriesController.addSeries)
router.put('/:id', checkCache, seriesController.updateSeries)
router.delete('/:id', checkCache, seriesController.deleteSeries)

module.exports = router;
