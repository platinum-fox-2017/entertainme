const axios = require('axios');

async function showData(req, res) {
  try {
    let movies = await axios.get('http://localhost:3000/movies')
    let series = await axios.get('http://localhost:4000/series')
    let data = {
      movies: movies.data,
      series: series.data
    }
    res.status(200).json({
      message: 'succes get each data',
      data
    })
  } catch (error) {
    res.status(500).json({
      message: 'error getting data'
    })
  }
}

module.exports = {
  showData
};
