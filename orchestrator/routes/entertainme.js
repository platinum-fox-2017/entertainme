const express = require('express');
const router = express.Router();

const {showMovieAndTV} = require('../controller/entertainme');

router.get('/',showMovieAndTV);

module.exports = router;