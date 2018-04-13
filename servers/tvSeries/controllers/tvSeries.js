const TvSeries = require('../models/tvSeries')

const createTvSeries = async (req, res) => {
  try {
    const addTvSerie = await TvSeries.create({
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status
    })
    res.status(200).json({
      info: '1 TvSerie added successfully',
      data: addTvSerie
    })
  } catch (error) {
    res.status(500).json({
      info: 'error creating data'
    })
  } 
} 

const getTvSeries = async (req, res) => {
  try {
    const tvSeries = await TvSeries.find().populate('tag')
    res.status(200).json({
      info: 'Fetch TvSeries successfully',
      data: tvSeries
    })
  } catch (error) {
    res.status(500).json({
      info: 'error while fetching data' 
    })
  }
}

module.exports = { createTvSeries, getTvSeries }
