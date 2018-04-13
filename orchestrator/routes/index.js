var express = require('express');
var router = express.Router();

const { getAllMovieCache } = require('../middleware/settleCache')

const { getAllMovie, addMovie, addTagMovie, inputTag, deleteMov } = require('../Controller/Movie.Controller')
const { getAllSeries, addSeries, addTagSeries,inputTagSer, deleteSer } = require('../Controller/Series.Controller')

/* GET Movie */
router.get('/getmovie', getAllMovieCache, getAllMovie)
router.post('/addmovie', addMovie)
router.post('/addtagmovie', addTagMovie)
router.put('/inputtag/:movie', inputTag)
router.delete('/deletemov/:movieid', deleteMov)

/* GET Movie */
router.get('/getseries', getAllSeries)
router.post('/addseries', addSeries)
router.post('/addtagseries', addTagSeries)
router.put('/inputtag/:series', inputTagSer)
router.delete('/deletemov/:seriesid', deleteSer)

module.exports = router;
