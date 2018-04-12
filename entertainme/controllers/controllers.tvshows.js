var axios = require('axios')
var redis = require('redis')
var client = redis.createClient()

module.exports = {
 
  getTvshows: async (req, res) => {
    if(req.status) {
      res.status(200).json({
        message: 'succed to get tv shows data',
        data: req.data.tvshows
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
          message: 'succed to get tv shows data',
          data: tempObj.tvshows
        })
      } catch (err) {
        return res.status(500).json({
          message: 'error to get tv shows data',
          err
        })
      }
    }
  },
 
  updateTvshows: async (req, res, next) => {
    try {
      await axios({
        method: 'put',
        url: `http://localhost:3002/tvshows/${req.params.id}`,
        data: req.body
      })
      req.status = false
      next()
    } catch (err) {
      return res.status(500).json({
        message: 'error to update tv shows data',
        err
      })
    }
  },
  
  deleteTvshows: async (req, res, next) => {
    try {
      await axios({
        method: 'delete',
        url: `http://localhost:3002/tvshows/${req.params.id}`,
        data: req.body
      })
      req.status = false
      next()
    } catch (err) {
      return res.status(500).json({
        message: 'error to delete tv shows data',
        err
      })
    }
  },
  
  postTvshows: async (req, res, next) => {
    try {
      await axios({
        method: 'post',
        url: `http://localhost:3002/tvshows`,
        data: req.body
      })
      req.status = false
      next()
    } catch (err) {
      return res.status(500).json({
        message: 'error to post new tv show data',
        err
      })
    }
  }
}