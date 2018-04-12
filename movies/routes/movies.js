const express = require('express');
const router = express.Router();
const movieController = require('../controllers/MovieController');

router.get('/', movieController.find);
router.post('/', movieController.create);

module.exports = router;
