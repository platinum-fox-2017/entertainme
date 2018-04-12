var express = require('express');
var router = express.Router();
var checkCache = require('../middlewares/checkCache')
var controllers = require('../controllers/controllers')

/* GET home page. */
router.get('/', checkCache, controllers);

module.exports = router;
