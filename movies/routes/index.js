const express = require('express');
const router = express.Router();
const movies = require('./movies')

router.get('/', function(req, res) {
  res.send('API WORK')
});

router.use('/api/movies', movies)

module.exports = router;
