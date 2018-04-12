var express = require('express');
var router = express.Router();

const { getAllSeries } = require('../Controller/Series.Controller')

/* GET home page. */
router.get('/', getAllSeries)

module.exports = router;
