var express = require('express');
var router = express.Router();
const { showMovie, addMovie, updateMovie, deleteMovie } = require('../controllers/movie.controller')

/* GET home page. */
router.get('/', showMovie);
router.post('/', addMovie);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
