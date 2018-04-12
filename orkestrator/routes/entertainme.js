const router = require('express').Router()
const cache = require('../middleware/cache')
const {
  getAllData,
  addMovie
} = require('../controllers/entertainme.controllers')

router.get('/', cache, getAllData)
router.post('/movie', addMovie)

module.exports = router