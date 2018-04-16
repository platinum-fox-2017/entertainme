
const router = require('express').Router();
const { movieCreate, movieReadAll } = require('../controllers/movie.controllers');
const { checkCahce } =  require('../middlewares/cache.middlewares');

router.get('/', checkCahce, movieReadAll);
router.post('/', checkCahce, movieCreate);

module.exports = router;