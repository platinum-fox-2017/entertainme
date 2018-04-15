const express = require('express');
const router = express.Router();
const { readAll, create } = require('../controllers/tvseries.contoller');

/* GET home page. */
router.get('/', readAll);
router.post('/', create);

module.exports = router;