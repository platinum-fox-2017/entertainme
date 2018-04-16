const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  getData:  async (req,res) => {
    try {
      const movies = await axios({
        method: `GET`,
        url: `http://localhost:3001/api/movies`
      })
  
      const tvseries = await axios({
        method: `GET`,
        url: `http://localhost:3002/api/tvseries`
      })
  
      let spreadObj = {
        movies: movies.data.data,
        tvseries: tvseries.data.data
      }
  
      client.set('entertainme', JSON.stringify(spreadObj))
  
      res.status(200).json({
        message: `Get Data Success`,
        data: spreadObj
      })
  
      return 
    } catch (err) {
      res.status(500).json({
        message: `Get Data Error ${err.message}`,
        data: []
      })
    }
  }
}



