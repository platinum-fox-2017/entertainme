const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const getMovieAndTv = async (req, res) => {
  try {
    const movies = await axios.get('http://localhost:3001/movies')
    const tvs = await axios.get('http://localhost:3002/tvs')
    const data =  {movies: movies.data, series: tvs.data }
    client.set('entertain', JSON.stringify(data), 'EX', 300)
    res.json(data)
  } catch (e) {
    /* handle error */
    res.status(500).json({ info: "Something Went Wrong" })
  }
}


module.exports = {
  getMovieAndTv
}
