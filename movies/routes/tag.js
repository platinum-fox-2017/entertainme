const express = require('express')
const router = express.Router();
const {show,add} = require('../controller/tag')


router.get('/',show)
router.post('/', add)

module.exports = router