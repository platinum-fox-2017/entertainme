const express = require('express');
const router = express.Router();
const { getData, addMovie, addTVseries, updateMovie, updateTVSeries, deleteMovie, deleteTVSeries } = require('../controllers/orchestrator.controller')
const checkCache = require('../middleware/checkCacheData');

router.get('/', checkCache, getData);
router.post('/addmovie', addMovie);
router.post('/addtvseries', addTVseries);
router.put('/updatemovie/:id', updateMovie);
router.put('/updatetvseries/:id', updateTVSeries);
router.delete('/deletemovie/:id', deleteMovie);
router.delete('/deletetvseries/:id', deleteTVSeries);

module.exports = router;
