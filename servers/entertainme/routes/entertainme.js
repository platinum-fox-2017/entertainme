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
 } = require('../controllers/entertainme')

console.log('>> 1 routes/ entertainme')

router.get('/', getMoviesAndTvSeries);

router.post('/movies', createMovie);
router.get('/movies', getMovies);
router.put('/movies/:id', updateMovie);
router.delete('/movies/:id', deleteMovie);

router.post('/tvseries', createTvSeries);
router.get('/tvseries', getTvSeries);
router.put('/tvseries/:id', updateTvSeries);
router.delete('/tvseries/:id', deleteTvSeries);

module.exports = router;
