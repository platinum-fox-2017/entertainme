const express = require('express');
const router = express.Router();

const controllers = require('../controllers/Controllers');
const validateCache = require('../middlewares/validateCache');
const movies = require('./movies')
const tvseries = require('./tvseries')

router.get('/api', validateCache, controllers.getData);
router.use('/api/movies', movies);
router.use('/api/tvseries', tvseries);

module.exports = router;
