var express = require('express');
var router = express.Router();
const { getMovieAndTv } = require('../controllers/EntertainController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json( { message: 'Welcome To Entertaintme API' });
});

router.get('/entertainme', getMovieAndTv)

module.exports = router;
