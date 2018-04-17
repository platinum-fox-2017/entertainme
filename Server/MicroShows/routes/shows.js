const express = require('express');
const router = express.Router();

// controller
const ShowController = require('../controllers/ShowController')

// route: /shows
router.get('/', ShowController.getShows)
router.post('/add', ShowController.addShow)
router.put('/update/:id', ShowController.updateShow)
router.delete('/delete/:id', ShowController.deleteShow)

module.exports = router;
