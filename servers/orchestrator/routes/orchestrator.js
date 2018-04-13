var express = require('express');
var router = express.Router();
const { getMoviesAndTvSeries } = require('../controllers/orchestrator')

/* GET users listing. */
router.get('/', getMoviesAndTvSeries);

module.exports = router;
