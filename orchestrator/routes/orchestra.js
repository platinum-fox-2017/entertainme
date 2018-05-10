var express = require('express');
var router = express.Router();
const { showData,addMovie,addSeries,editMovie,editSeries,deleteMovie,deleteSeries } = require('../controllers/orches.controller')
const checkCache = require('../middleware/cacheData');

router.get('/',checkCache, showData);
router.post('/addmovie', addMovie);
router.post('/addtvseries', addSeries);
router.put('/updatemovie/:id', editMovie);
router.put('/updatetvseries/:id', editSeries);
router.delete('/deletemovie/:id', deleteMovie);
router.delete('/deletetvseries/:id', deleteSeries);

module.exports = router;
