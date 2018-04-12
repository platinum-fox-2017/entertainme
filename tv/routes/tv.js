const router = require('express').Router()

const {
  getAllTv,
  addTv
} = require('../controllers/tv.controllers')

router.get('/', getAllTv)
router.post('/', addTv)

module.exports = router