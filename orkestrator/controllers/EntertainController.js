const axios = require('axios')

const getMovieAndTv = async (req, res) => {
  try {
    const movies = await axios.get('http://localhost:3001/movies')
    const tvs = await axios.get('http://localhost:3002/tvs')
    res.json({movies: movies.data, series: tvs.data })
  } catch (e) {
    /* handle error */
    res.status(500).json({ info: "Something Went Wrong" })
  }
}

module.exports = {
  getMovieAndTv
}
