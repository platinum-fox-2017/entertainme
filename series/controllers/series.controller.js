const Series = require('../models/Series.model')

module.exports = {
  getSeries: async(req, res) => {
    if (req.headers.cache) {
      res.status(200).json({
        message: 'series fetched',
        serial: req.headers.cache
      })
    } else {
      try {
        let series = await Series.find()
        client.set('series', JSON.stringify(series))
        res.status(200).json({
          message: 'series fetched',
          serial: series
        })
      } catch (err) {
        res.status(500).json({
          message: 'unable to fetch series',
          err
        })
      }
    }
  },
  addSeries: async(req, res) => {
    try {
      let addSeries = await Series.create({
        name: req.body.name,
        overview: req.body.overview,
        popularity: req.body.popularity,
        tag: req.body.tag
      })
      if (req.headers.cache) {
        req.headers.cache.push(addSeries)
        client.set('series', JSON.stringify(req.headers.cache))
      }
      res.status(200).json({
        message: 'series added',
        addSeries
      })
    } catch (err) {
      res.status(500).json({
        message: 'unable to add movie',
        err
      })
    }
  },
  updateSeries: (req, res) => {
    Series.findByIdAndUpdate(req.params.id)
      .exec()
      .then(res => {
        res.status(200).json({
          message: 'updated',
          res
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'unable to update',
          err
        })
      })
  },
  deleteSeries: (req, res) => {
    Series.findByIdAndRemove(req.params.id)
      .exec()
      .then(res => {
        res.status(200).json({
          message: 'deleted',
          res
        })
      })
      .catch(err => {
        res.status(400).json({
          message: 'unable to delete',
          err
        })
      })
  }
}