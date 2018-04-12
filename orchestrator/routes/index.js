var express = require('express');
var router = express.Router();

const { getAllMovieCache } = require('../middleware/settleCache')

const { getAllMovie, addMovie, addTagMovie, inputTag } = require('../Controller/Movie.Controller')

/* GET home page. */
router.get('/getmovie', getAllMovieCache, getAllMovie)
router.post('/addmovie', addMovie)
router.post('/addtagmovie', addTagMovie)
router.put('/inputtag/:movie', inputTag)

module.exports = router;
