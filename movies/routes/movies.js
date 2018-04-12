const express = require('express')
const route = express.Router()
const movieController = require('../controllers/movie.controller')
const { checkCache } = require('../middleware/cache')

route.get('/', checkCache, movieController.getAll)
route.post('/', checkCache, movieController.addMovie)
route.put('/:id', movieController.updateMovie)
route.delete('/:id', movieController.deleteMovie)

module.exports = route