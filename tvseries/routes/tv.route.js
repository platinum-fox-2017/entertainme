var express = require('express');
var router = express.Router();
const { showTVSeries, addTVSeries, updateTVSeries, deleteTVSeries } = require('../controllers/tv.controller');

/* GET home page. */
router.get('/', showTVSeries);
router.post('/', addTVSeries);
router.put('/:id', updateTVSeries);
router.delete('/:id', deleteTVSeries);

module.exports = router;
