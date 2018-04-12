const Series = require('../Model/Series.Model')

const getAllSeries = (req, res) => {
  res.send('Hi Series')
}

module.exports = {
  getAllSeries
}