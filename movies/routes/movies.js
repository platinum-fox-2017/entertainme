const express = require('express');
const router = express.Router();
const { addMovie,showMovies,editMovie,deleteMovie } = require('../controllers/movie.controller');

router.get('/', showMovies)
router.post('/', addMovie)
router.put('/:id', editMovie)
router.delete('/:id', deleteMovie)

module.exports = router
