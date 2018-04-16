var express = require('express');
var router = express.Router();
const { 
  getMoviesAndTvSeries, 
  createMovie, 
  getMovies, 
  updateMovie,
  deleteMovie, 
  createTvSeries,
  getTvSeries, 
  updateTvSeries,
  deleteTvSeries,
 } = require('../controllers/orchestrator')


 router.get('/', getMoviesAndTvSeries);

router.post('/movie', createMovie);
router.get('/movie', getMovies);
router.put('/movie/:id', updateMovie);
router.delete('/movie/:id', deleteMovie);

router.post('/tvseries', createTvSeries);
router.get('/tvseries', getTvSeries);
router.put('/tvseries/:id', updateTvSeries);
router.delete('/tvseries/:id', deleteTvSeries);

module.exports = router;

