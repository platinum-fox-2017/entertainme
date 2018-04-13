const express = require('express');
const router = express.Router();
const { addMovie, loadMovies, updateMovie, dropMovie } = require('../controllers/movie.api.controller');
const { cacheMovies } = require('../middlewares/cache');

module.exports = router
  .use(cacheMovies)
  .get('/', loadMovies)
  .post('/', addMovie)
  .put('/:id', updateMovie)
  .delete('/:id', dropMovie)