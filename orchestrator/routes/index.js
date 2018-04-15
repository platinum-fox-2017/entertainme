const express = require('express');
const router = express.Router();
const { getAllData } = require('../controllers');
const checkRedis = require('../middlewares/redis');
const { createMovies } = require('../controllers/movies.controller')
const { createTvSeries } = require('../controllers/tvseries.controller')

router.get('/', checkRedis, getAllData);
router.post('/movies', createMovies)
router.post('/tvseries', createMovies)
module.exports = router;
