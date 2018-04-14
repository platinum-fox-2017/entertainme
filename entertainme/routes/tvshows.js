var express = require('express');
var router = express.Router();
var checkCache = require('../middlewares/checkCache')
var { getTvshows, postTvshows, updateTvshows, deleteTvshows } = require('../controllers/controllers.tvshows')
var { getAll } = require('../controllers/controllers')

/* GET home page. */
router.get('/', checkCache, getTvshows);
router.put('/:id', updateTvshows, getAll);
router.delete('/:id', deleteTvshows, getAll);
router.post('/', postTvshows, getAll);

module.exports = router;
