const axios = require('axios');
const redis = require('redis')
const client = redis.createClient()

module.exports = {

  getData: async (req, res) => {
    let moviesURL = 'http://localhost:3001/movies'
    let ShowsURL = 'http://localhost:3002/shows'
    try {
      let movies = await axios.get(moviesURL)
      let shows = await axios.get(ShowsURL)
      let movieString = JSON.stringify(movies.data)
      let showString = JSON.stringify(shows.data)
      client.hmset('entertainme', {
        'movies': movieString,
        'shows': showString
      });
      client.expire('entertainme', 900);
      res.status(200).json({
        movies: movies.data,
        shows: shows.data
      })
    } catch (e) {
      console.log('error');
      res.status(500).send(e)
    }
  },

  addMovies: async (req, res) => {
    let moviesURL = 'http://localhost:3001/movies/add/'
    try {
      let response = await axios.post(moviesURL, {
        poster_path: req.body.poster_path,
        overview: req.body.overview,
        title: req.body.title,
        popularity: req.body.popularity,
        status: req.body.status
      })

      // update cache
      let movies = await axios.get('http://localhost:3001/movies')
      let shows = await axios.get('http://localhost:3002/shows')
      client.hmset('entertainme', {
        'movies': JSON.stringify(movies.data),
        'shows': JSON.stringify(shows.data)
      }, () => {
        client.expire('entertainme', 900);
      });

      res.status(200).send(response.data)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  addShows: async (req, res) => {
    let ShowsURL = 'http://localhost:3002/shows/add/'
    try {
      let response = await axios.post(ShowsURL, {
        poster_path: req.body.poster_path,
        overview: req.body.overview,
        title: req.body.title,
        popularity: req.body.popularity,
        status: req.body.status
      })

      // update cache
      let movies = await axios.get('http://localhost:3001/movies')
      let shows = await axios.get('http://localhost:3002/shows')
      client.hmset('entertainme', {
        'movies': JSON.stringify(movies.data),
        'shows': JSON.stringify(shows.data)
      }, () => {
        client.expire('entertainme', 900);
      });

      res.status(200).send(response.data)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  updateMovies: async (req, res) => {
    let moviesURL = 'http://localhost:3001/movies/update/' + `${req.body.id}`
    let updateData = {}
    if (req.body.poster_path) {updateData.poster_path = req.body.poster_path}
    if (req.body.overview) {updateData.overview = req.body.overview}
    if (req.body.title) {updateData.title = req.body.title}
    if (req.body.popularity) {updateData.popularity = req.body.popularity}
    if (req.body.status) {updateData.status = req.body.status}
    try {
      let response = await axios.put(moviesURL, updateData)

      // update cache
      let movies = await axios.get('http://localhost:3001/movies')
      let shows = await axios.get('http://localhost:3002/shows')
      client.hmset('entertainme', {
        'movies': JSON.stringify(movies.data),
        'shows': JSON.stringify(shows.data)
      }, () => {
        client.expire('entertainme', 900);
      });

      res.status(200).send(response.data)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  updateShows: async (req, res) => {
    let ShowsURL = 'http://localhost:3002/shows/update/' + `${req.body.id}`
    let updateData = {}
    if (req.body.poster_path) {updateData.poster_path = req.body.poster_path}
    if (req.body.overview) {updateData.overview = req.body.overview}
    if (req.body.title) {updateData.title = req.body.title}
    if (req.body.popularity) {updateData.popularity = req.body.popularity}
    if (req.body.status) {updateData.status = req.body.status}
    try {
      let response = await axios.put(ShowsURL, updateData)

      // update cache
      let movies = await axios.get('http://localhost:3001/movies')
      let shows = await axios.get('http://localhost:3002/shows')
      client.hmset('entertainme', {
        'movies': JSON.stringify(movies.data),
        'shows': JSON.stringify(shows.data)
      }, () => {
        client.expire('entertainme', 900);
      });

      res.status(200).send(response.data)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  deleteMovies: async (req, res) => {
    let moviesURL = 'http://localhost:3001/movies/delete/' + `${req.body.id}`
    try {
      let response = await axios.delete(moviesURL)

      // update cache
      let movies = await axios.get('http://localhost:3001/movies')
      let shows = await axios.get('http://localhost:3002/shows')
      client.hmset('entertainme', {
        'movies': JSON.stringify(movies.data),
        'shows': JSON.stringify(shows.data)
      }, () => {
        client.expire('entertainme', 900);
      });

      res.status(200).send(response.data)
    } catch (e) {
      res.status(500).send(e)
    }
  },

  deleteShows: async (req, res) => {
    let ShowsURL = 'http://localhost:3002/shows/delete/' + `${req.body.id}`
    try {
      let response = await axios.delete(ShowsURL)
      res.status(200).send(response.data)
    } catch (e) {
      res.status(500).send(e)
    }
  }

};
