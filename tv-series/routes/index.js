const routes = require('express').Router()
const { createShow, getShows } = require('../controllers/tv.controller')

// routes.get('/', (req, res) => {
//   res.status(200).json({
//     message: 'connected!'
//   })
// })

routes.get('/', getShows)
routes.post('/', createShow)

module.exports = routes