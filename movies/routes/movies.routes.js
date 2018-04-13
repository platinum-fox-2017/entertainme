const express = require('express'),
      router = express.Router();

const { getAllMovies, addMovies, addTag, inputTag, deleteMovie } = require('../Controller/index.controller')

/* GET home page. */
router.get('/', getAllMovies)
router.post('/add', addMovies)
router.post('/addtag', addTag)
router.put('/inputtag', inputTag)
router.delete('/deletmov/:movieid', deleteMovie)

module.exports = router;
