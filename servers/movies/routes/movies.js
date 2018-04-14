var express = require('express');
var router = express.Router();
var { createMovie, 
  getMovies, 
  updateMovie,
  deleteMovie
} = require ('../controllers/movies')

/* GET movies listing. */
router.post('/', createMovie);
router.get('/', getMovies);
router.put('/:id', updateMovie);
router.delete('/:id', deleteMovie);

module.exports = router;
