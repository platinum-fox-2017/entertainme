const express = require('express');
const router = express.Router();
const { readAll, create, update, findById, remove } = require('../controllers/tvseries.contoller');

/* GET home page. */
router.get('/', readAll);
router.post('/', create);
router.put('/:id', update);
router.get('/:id', findById);
router.delete('/:id', remove);

module.exports = router;