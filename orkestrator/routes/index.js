const express = require('express');
const router = express.Router();
const { getAll, createMovie, createTv } = require('../controllers');
const { checkCahce } = require('../middlewares/cache.middlewares');

router.get('/entertainme', checkCahce,  getAll);

router.post('/movie', checkCahce,  createMovie);
router.post('/tv', checkCahce,  createTv);


module.exports = router;
