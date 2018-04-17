const express = require('express');
const router = express.Router();
const { getAllData } = require('../controllers');
const checkRedis = require('../middlewares/redis');
const { findMovies, findByIdMovies, createMovies, updateMovies, deleteMovies } = require('../controllers/movies.controller')
const { findTvSeries, findByIdTvSeries, createTvSeries, updateTvSeries, deleteTvSeries } = require('../controllers/tvseries.controller')

router.get('/', checkRedis, getAllData);

router.get('/movies', findMovies);
router.get('/movies/:id', findByIdMovies);
router.post('/movies', createMovies)
router.put('/movies/:id', updateMovies)
router.delete('/movies/:id', deleteMovies)

router.get('/tvseries', findTvSeries);
router.get('/tvseries/:id', findByIdTvSeries);
router.post('/tvseries', createMovies)
router.put('/tvseries/:id', updateTvSeries)
router.delete('/tvseries/:id', deleteTvSeries)

module.exports = router;
