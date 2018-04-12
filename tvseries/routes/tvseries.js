const express = require('express');
const router = express.Router();
const tvSeriesController = require('../controllers/TvSeriesController');

router.get('/', tvSeriesController.find);
router.post('/', tvSeriesController.create);

module.exports = router;
