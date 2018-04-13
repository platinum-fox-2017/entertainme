var express = require('express');
var router = express.Router();
var { createTvSeries, getTvSeries } = require ('../controllers/tvSeries')

/* GET movies listing. */
router.post('/', createTvSeries);
router.get('/', getTvSeries);

module.exports = router;
