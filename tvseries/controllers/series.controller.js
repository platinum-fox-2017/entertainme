const Series = require('../models/series');

module.exports = {
  addSeries: function (req, res) {
    const series = new Series()
    series.title = req.body.title
    series.overview = req.body.poster_path
    series.popularity = req.body.popularity
    series.tag = req.body.tag
    series.status = req.body.status
    series.save().then(data => {
      res.status(201).json({
        message: 'success add series',
        data
      })
    })
  },
  showSeries: function (req, res) {
    Series.find().then(data => {
      res.status(200).json({
        message: 'success get data',
        data
      })
    })
  },
  editSeries: function (req, res) {
    Series.updateOne({
      _id: req.params.id
    }, {
      $set: {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status
      }
    }).then(data => {
      res.status(200).json({
        message: 'success edit series',
        data
      })
    })
  },
  deleteSeries: function (req, res) {
    Series.remove({
      _id: req.params.id
    }).then(data => {
      res.status(200).json({
        message: 'success delete series',
        data
      })
    }).catch(err => {
      res.status(500).json({
        message: 'error'
      })
    })
  }
}
