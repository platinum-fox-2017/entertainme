var express = require('express');
var router = express.Router();
var checkCache = require('../middlewares/checkCache')
var { getAll } = require('../controllers/controllers')

/* GET home page. */
router.get('/', checkCache, getAll);

module.exports = router;
