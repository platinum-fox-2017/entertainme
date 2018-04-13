var express = require('express');
var router = express.Router();
const { getData } = require('../controllers/orchestrator.controller')

router.get('/', getData);

module.exports = router;
