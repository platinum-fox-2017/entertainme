var express = require('express');
var router = express.Router();
var checkCache = require('../middlewares/checkCache')
var { getMovies, updateMovies, deleteMovies, postMovies } = require('../controllers/controllers.movies')
var { getAll } = require('../controllers/controllers')

/* GET home page. */
router.get('/', checkCache, getMovies);
router.put('/:id', updateMovies, getAll);
router.delete('/:id', deleteMovies, getAll);
router.post('/', postMovies, getAll);

module.exports = router;
