const axios = require('axios')

const MoviesUrl = 'http://localhost:3001/movies'
const tvSeriesUrl = 'http://localhost:3002/tvSeries'

const getMoviesAndTvSeries = async(req, res) => {
  try {
    const movies = await axios.get(moviesUrl)
    const tvSeries = await axios.get(tvSeriesUrl)
    res.status(200).json({
      movies: movies.data,
      tvSeries: tvSeries.data,
    })
  } catch (error) {
    res.status(500).json({
      info: 'Error while fetching data'
    })
  }
}

module.exports = {
  getMoviesAndTvSeries
};