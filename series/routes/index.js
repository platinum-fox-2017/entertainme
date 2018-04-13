var express = require('express');
var router = express.Router();

const { getAllSeries, addSeries, addTag, inputTag, deleteSeries } = require('../Controller/Series.Controller')

/* GET home page. */
router.get('/', getAllSeries)
router.post('/add', addSeries)
router.post('/addtag', addTag)
router.put('/inputtag', inputTag)
router.delete('/deletmov/:seriesid', deleteSeries)

module.exports = router;
