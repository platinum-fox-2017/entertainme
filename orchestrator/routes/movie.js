const express = require('express');
const router = express.Router();
const {showMovies,addMovies} = require('../controller/entertainme');

router.get('/', showMovies );
router.post('/', addMovies);


module.exports = router;