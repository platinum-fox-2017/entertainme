const express = require('express')
const router = express.Router();
const {showTv,addTv,updateTv,deleteTv} = require('../controller/tv')


router.get('/tv',showTv)
router.post('/tv', addTv)
router.put('/tv/:id', updateTv)
router.delete('/tv/:id', deleteTv)

module.exports = router