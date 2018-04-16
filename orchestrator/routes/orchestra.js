var express = require('express');
var router = express.Router();
const { showData } = require('../controllers/orches.controller')
const checkCache = require('../middleware/cacheData');

router.get('/',checkCache, showData);

module.exports = router;
