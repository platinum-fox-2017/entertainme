const routes = require('express').Router()
const { getAllData, addMovie } = require('../controllers/entertainme.controller')
const { cache } = require('../middlewares/cache')

// routes.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'connected!'
//   })
// })

routes.get('/', cache, getAllData)
routes.post('/movie', addMovie)

module.exports = routes