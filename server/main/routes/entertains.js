const express = require('express')
const router  = express.Router()
const { 
  readAllData, 
  readMoviesData, 
  readTvseriesData,
  readDataById, 
  createMovieData, 
  createTvseriesData, 
  updateMovieData,
  updateTvseriesData,
  deleteMovieData,
  deleteTvseriesData
} = require('../controllers/entertains')

router.get('/', readAllData)
router.get('/all', readAllData)
router.get('/movies', readMoviesData)
router.get('/series', readTvseriesData)
router.post('/movies', createMovieData)
router.post('/series', createTvseriesData)
router.put('/movies/:id', updateMovieData)
router.put('/series/:id', updateTvseriesData)
router.delete('/movies/:id', deleteMovieData)
router.delete('/series/:id', deleteTvseriesData)

module.exports = router;
