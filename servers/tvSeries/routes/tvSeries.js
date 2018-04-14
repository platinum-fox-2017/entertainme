var express = require('express');
var router = express.Router();
var { 
  createTvSeries, 
  getTvSeries, 
  updateTvSeries,
  deleteTvSeries
} = require ('../controllers/tvSeries')


/* GET movies listing. */
router.post('/', createTvSeries);
router.get('/', getTvSeries);
router.put('/:id', updateTvSeries);
router.delete('/:id', deleteTvSeries);

module.exports = router;
