var express = require('express');
var router = express.Router();
const { create, update, destroy } = require('../controllers/MovieController')

/* GET users listing. */
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy)

module.exports = router;
