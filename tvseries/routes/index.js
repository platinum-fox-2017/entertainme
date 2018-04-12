const express = require('express');
const router = express.Router();
const tvseries = require('./tvseries');

router.get('/', function(req, res) {
  res.send('API Work !')
});

router.use('/api/tvseries', tvseries)

module.exports = router;
