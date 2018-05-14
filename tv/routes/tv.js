
const router = require('express').Router();
const { tvCreate, tvReadAll } = require('../controllers/tv.controllers');
const { checkCahce } = require('../middlewares/cache.middlewares')

router.get('/', checkCahce, tvReadAll);
router.post('/', checkCahce, tvCreate);

module.exports = router;