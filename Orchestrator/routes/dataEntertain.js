const express = require('express');
const router = express.Router();

// controller
const DataController = require('../controllers/DataController')

// middleware
const { checkCache } = require('../middleware/redisCache')

// route: /entertain
router.get('/me', checkCache, DataController.getData)

// movies management
router.post('/movies/add', DataController.addMovies)
router.put('/movies/update/:id', DataController.updateMovies)
router.delete('/movies/delete/:id', DataController.deleteMovies)

// shows management
router.post('/shows/add', DataController.addShows)
router.put('/shows/update/:id', DataController.updateShows)
router.delete('/shows/delete/:id', DataController.deleteShows)

module.exports = router;
