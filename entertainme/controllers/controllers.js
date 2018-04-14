var axios = require('axios')
var redis = require('redis')
var client = redis.createClient()

module.exports = {
  getAll: async (req, res) => {
    if(req.status) {
      res.status(201).json({
        message: 'succeed to get data',
        data: req.data
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
          message: 'succed to get data',
          data: tempObj
        })
      } catch (err) {
        return res.status(500).json({
          message: 'error to get data',
          err
        })
      }
    }
  }
}