const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  getAllData: async function (req, res) {
    try {
      let movies = await axios.get('http://localhost:3001/movie')
      let tv = await axios.get('http://localhost:3002/tv')
      
      let data = {
        movies: movies.data.movies,
        shows: tv.data.shows
      }

      client.set('entertainme', JSON.stringify(data))
      client.expire('entertainme', 500)
      return res.status(200).json({
        message: 'success',
        data: data
      })
    } catch (err) {
      res.status(500).json({
        message: err
      })
    }
  },

  addMovie: async function (req, res) {
    try {
      let newMovie = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        status: req.body.status
      }
      let insert = await axios.post('http://localhost:3001/movie', newMovie)
      res.status(201).json({
        message: 'new movie added',
        movie: insert.data
      })
      client.del('entertainme', function(err, reply) {
        console.log(reply)
      })
    } catch (err) {
      return res.status(500).json({
        message: err.response
      })
    }
  },

  addTvShow: async function (req, res) {
    try {
      let newShow = {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        status: req.body.status
      }
      let insert = await axios.post('http://localhost:3002/tv', newShow)
      res.status(201).json({
        message: 'new show added',
        show: insert.data
      })
      client.del('entertainme', function(err, reply) {
        console.log(reply)
      })
    } catch (err) {
      return res.status(500).json({
        message: err.response
      })
    }
  }
}