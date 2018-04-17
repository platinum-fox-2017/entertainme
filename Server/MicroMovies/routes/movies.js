const express = require('express');
const router = express.Router();

// controller
const MovieController = require('../controllers/MovieController')

// route: /movies
router.get('/', MovieController.getMovies)
router.post('/add', MovieController.addMovie)
router.put('/update/:id', MovieController.updateMovie)
router.delete('/delete/:id', MovieController.deleteMovie)

module.exports = router;
