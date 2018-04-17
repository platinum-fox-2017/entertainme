const express = require('express')
const router = express.Router();
const {showMovies,addMovies,update,deleteMov} = require('../controller/movies')


router.get('/movie',showMovies)
router.post('/movie', addMovies)
router.put('/movie/:id', update)
router.delete('/movie/:id', deleteMov)

module.exports = router