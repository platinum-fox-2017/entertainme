const router = require('express').Router()

const {
  getAllMovies,
  addMovies
} = require('../controllers/movies.controllers')

router.get('/', getAllMovies)
router.post('/', addMovies)

module.exports = router