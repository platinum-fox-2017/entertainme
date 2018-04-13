const express = require ('express');
const { getMovies, addMovies } = require ('../controllers/Movies.Controller');
const router = express.Router()

router
.get('/', getMovies)
.post('/', addMovies)

module.exports = router;