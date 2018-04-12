const express = require('express'),
      router = express.Router();

const { getAllMovies, addMovies, addTag, inputTag } = require('../Controller/index.controller')

/* GET home page. */
router.get('/', getAllMovies)
router.post('/add', addMovies)
router.post('/addtag', addTag)
router.put('/inputtag', inputTag)

module.exports = router;
