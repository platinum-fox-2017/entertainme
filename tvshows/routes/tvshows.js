var express = require('express');
var router = express.Router();
var { findAll, create, update, destroy } = require('../controllers/controllers.tvshows')

/* GET users listing. */
router.get('/', findAll);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', destroy);

module.exports = router;
