const express = require('express');
const router = express.Router();
const { addMovie, loadMovies, updateMovie, dropMovie } = require('../controllers/movie.api.controller');

module.exports = router
  .get('/', loadMovies)
  .post('/', addMovie)
  .put('/:id', updateMovie)
  .delete('/:id', dropMovie)