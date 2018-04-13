var express = require('express');
var router = express.Router();
var { createMovie, getMovies } = require ('../controllers/movies')

/* GET movies listing. */
router.post('/', createMovie);
router.get('/', getMovies);

module.exports = router;
