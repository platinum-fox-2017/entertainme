var axios = require('axios')
var redis = require('redis')
var client = redis.createClient()

module.exports = {
  getMovies: async (req, res) => {
    if(req.status) {
      res.status(200).json({
        message: 'succed to get movies data',
        data: req.data.movies
      })
    } else {
      try {
        const movies = await axios({
          method: 'get',
          url: 'http://localhost:3001/movies'
        })
      
        const tvshows = await axios({
          method: 'get',
          url: 'http://localhost:3002/tvshows'
        })
      
        let tempObj = {
          movies: movies.data,
          tvshows: tvshows.data
        }
      
        client.set('entertainme', JSON.stringify(tempObj))
      
        return res.status(200).json({
          message: 'succed to get movies data',
          data: tempObj.movies
        })
      } catch (err) {
        return res.status(500).json({
          message: 'error to get movies data',
          err
        })
      }
    }
  }, 
 
  updateMovies: async (req, res, next) => {
    try {
      console.log(req.body)
      await axios({
        method: 'put',
        url: `http://localhost:3001/movies/${req.params.id}`,
        data: req.body
      })
      req.status = false
      next()
    } catch (err) {
      return res.status(500).json({
        message: 'error to update movies data',
        err
      })
    }
  },
 
  deleteMovies: async (req, res, next) => {
    try {
      console.log(req.body)
      await axios({
        method: 'delete',
        url: `http://localhost:3001/movies/${req.params.id}`,
        data: req.body
      })
      req.status = false
      next()
    } catch (err) {
      return res.status(500).json({
        message: 'error to delete movies data',
        err
      })
    }
  },
  
  postMovies: async (req, res, next) => {
    try {
      console.log(req.body)
      await axios({
        method: 'post',
        url: `http://localhost:3001/movies`,
        data: req.body
      })
      req.status = false
      next()
    } catch (err) {
      return res.status(500).json({
        message: 'error to post new movie data',
        err
      })
    }
  },
 
}