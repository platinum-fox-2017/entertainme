const express = require('express');
const router = express.Router();
const { getAll } = require('../controllers');
const { checkCahce } = require('../middlewares/cache.middlewares')

router.get('/', function(req, res) {
  res.send('index', { title: 'Express' });
});

router.get('/entertainme', checkCahce,  getAll);


module.exports = router;
