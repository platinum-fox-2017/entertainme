const router = require('express').Router()

const {
  getAllMovies,
  addMovies,
  updateMovie,
  deleteMovie
} = require('../controllers/movies.controllers')

router.get('/', getAllMovies)
router.post('/', addMovies)
router.put('/:movieId', updateMovie)
router.delete('/:movieId', deleteMovie)

module.exports = router