const routes = require('express').Router()
const { createMovie, getMovies } = require('../controllers/movie_controller')

// routes.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'Connected!'
//   })
// })

routes.post('/', createMovie)
routes.get('/', getMovies)

module.exports = routes;