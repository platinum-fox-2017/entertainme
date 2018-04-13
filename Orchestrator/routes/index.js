var express = require('express');
var router = express.Router();
const { FetchData, addMovie, addTVseries } = require('../controllers/MicroService.controller')

/* GET home page. */
router.get( '/', FetchData );
router.post( '/movies/add', addMovie );
router.post( '/tvseries/add', addTVseries );

module.exports = router;