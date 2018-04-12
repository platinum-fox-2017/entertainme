const axios       = require('axios')
const urlMovie    = 'http://localhost:3001/api/movies'
const urlTvseries = 'http://localhost:3002/api/tvseries'

module.exports = {
  readAllData: async (req, res) => {
    try {
      const movies = await axios.get(urlMovie)
      const series = await axios.get(urlTvseries)
      // console.log('movies', movies)
      const data   = {
        movies: movies.data,
        series: series.data
      }
      // console.log('readAllData', datas)
      res.status(200).json({
        message: 'success to get all data movies and tv-series',
        data
      })
    } catch (err) {
      res.status(500).json('an error occured while getting all data: ', err)
    }
  },

  readMoviesData: async (req, res) => {
    try {
      const movies = await axios.get(urlMovie)
      res.status(200).json(movies.data)
    } catch (err) {
      res.status(500).json('an error occured while getting movie data: ', err)
    }
  },

  readTvseriesData: async (req, res) => {
    try {
      const series = await axios.get(urlTvseries)
      res.status(200).json(series.data)
    } catch (err) {
      res.status(500).json('an error occured while getting tv-series data: ', err)
    }
  },

  createMovieData: async (req, res) => {
    try {
      const movie = await axios.post(urlMovie, {
        title       : req.body.title,
        overview    : req.body.overview,
        poster_path : req.body.poster_path,
        popularity  : req.body.popularity,
        tag         : req.body.tag,
        status      : req.body.status
      })
      res.status(200).json({
        message : 'success insert record in movies',
        data: movie.data
      })
      readAllData(req, res)
    } catch (err) {
      res.status(500).json('an error occured while adding movie data: ', err)
    }
  },

  createTvseriesData: async (req, res) => {
    try {
      const series = await axios.post(urlTvseries, {
        title       : req.body.title,
        overview    : req.body.overview,
        poster_path : req.body.poster_path,
        popularity  : req.body.popularity,
        tag         : req.body.tag,
        status      : req.body.status
      })
      res.status(200).json({
        message : 'success insert record in tv-series',
        data: series.data
      })
      readAllData(req, res)
    } catch (err) {
      res.status(500).json('an error occured while adding tv-series data: ', err)
    }
  },

  updateMovieData: async (req, res) => {
    try {
      const movie = await axios.put(`${urlMovie}/${req.params.id}`, {
        title       : req.body.title,
        overview    : req.body.overview,
        poster_path : req.body.poster_path,
        popularity  : req.body.popularity,
        tag         : req.body.tag,
        status      : req.body.status
      })
      res.status(200).json({
        message : 'success update record in movies',
        data: movie.data
      })
      readAllData(req, res)
    } catch (err) {
      res.status(500).json('an error occured while update movie data: ', err)
    }
  },

  updateTvseriesData: async (req, res) => {
    try {
      const movie = await axios.put(`${urlTvseries}/${req.params.id}`, {
        title       : req.body.title,
        overview    : req.body.overview,
        poster_path : req.body.poster_path,
        popularity  : req.body.popularity,
        tag         : req.body.tag,
        status      : req.body.status
      })
      res.status(200).json({
        message : 'success update record in tv-series',
        data: movie.data
      })
      readAllData(req, res)
    } catch (err) {
      res.status(500).json('an error occured while update tv-series data: ', err)
    }
  },

  deleteMovieData: async (req, res) => {
    try {
      const movie = await axios.delete(`${urlMovie}/${req.params.id}`)
      res.status(200).json({ message: 'success delete record in movies' })
      readAllData(req, res)
    } catch (err) {
      res.status(500).json('an error occured while delete movie data: ', err)
    }
  },

  deleteTvseriesData: async (req, res) => {
    try {
      const series = await axios.delete(`${urlTvseries}/${req.params.id}`)
      res.status(200).json({ message: 'success delete record in tv-series' })
      readAllData(req, res)
    } catch (err) {
      res.status(500).json('an error occured while delete tv-series data: ', err)
    }
  }
}