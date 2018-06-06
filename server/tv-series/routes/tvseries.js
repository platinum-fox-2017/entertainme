const { readData, readDataById, createData, updateData, deleteData } = require('../controllers/tvseries')
const express = require('express')
const router  = express.Router()

router.get('/', readData)
router.get('/:id', readDataById)
router.post('/', createData)
router.put('/:id', updateData)
router.delete('/:id', deleteData)

module.exports = router;
