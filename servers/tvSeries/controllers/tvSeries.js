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
    const tvSeries = await TvSeries.find()
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

const updateTvSeries = async (req, res) => {
  try {
    const tvSeriesUpdated = await TvSeries.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag,
      status: req.body.status,
    })
    res.status(200).json({
      info: 'Update Tv Series Success !',
      data: tvSeriesUpdated
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteTvSeries = async (req, res) => {
  try {
    await TvSeries.findByIdAndRemove(req.params.id)

    res.status(200).json({
      info: 'Delete Tv Series Success !'
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = { 
  createTvSeries, 
  getTvSeries, 
  updateTvSeries,
  deleteTvSeries
}
