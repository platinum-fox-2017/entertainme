const router = require('express').Router()

const {
  getAllTv,
  addTv,
  updateTV,
  deleteTV
} = require('../controllers/tv.controllers')

router.get('/', getAllTv)
router.post('/', addTv)
router.put('/:tvId', updateTV)
router.delete('/:tvId', deleteTV)

module.exports = router