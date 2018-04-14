const express = require('express');
const router = express.Router();
const { addSeries,showSeries,editSeries,deleteSeries } = require('../controllers/series.controller');

router.get('/', showSeries)
router.post('/', addSeries)
router.put('/:id', editSeries)
router.delete('/:id', deleteSeries)

module.exports = router
