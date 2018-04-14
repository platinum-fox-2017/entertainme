const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const moviesUrl = 'http://localhost:3001/movies'
const tvSeriesUrl = 'http://localhost:3002/tvSeries'

const getMoviesAndTvSeries = async(req, res) => {
  try {
    const movies = await axios.get(moviesUrl)
    const tvSeries = await axios.get(tvSeriesUrl)

    const result = {
      movies: movies.data,
      tvSeries: tvSeries.data,
    }

    console.log('orchestrator/ controller/ result : ', result)

    //without Redis
    // res.status(200).json({
    //   result
    // })

    //With Redis
    client.set('Orchestrator data', JSON.stringify(result))
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({
      info: 'Error while fetching data'
    })
  }
}

module.exports = {
  getMoviesAndTvSeries
};