const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  createTvSeries: async (req,res) => {
    try {
      const newTvSeries = await axios({
        method: `POST`,
        url: `http://localhost:3002/api/tvseries`,
        data: {
          title: req.body.title,
          overview: req.body.overview,
          poster_path: req.body.poster_path,
          popularity: req.body.popularity,
          tag: req.body.tag,
          status : req.body.status
        }
      })

      if (newTvSeries) {
        client.get('entertainme', (err, reply) => {
          let existingCache = JSON.parse(reply)
          existingCache.tvseries.push(newTvSeries.data.data)
          client.set('entertainme', JSON.stringify(existingCache))
          return res.status(200).json(newTvSeries.data)
        })
      } else {
        res.status(202).json({
          message: `Create new tv series failed`,
          data: {}
        })
        return
      }
    } catch (err) {
      res.status(500).json({
        message: `Create new tv series error ${err}`
      })
    }
  },

  updateTvSeries: async (req,res) => {
    const tvseriesId = req.params.id
    try {
      const updatedTvSeries = await axios({
        method: `PUT`,
        url: `http://localhost:3002/api/tvseries/${tvseriesId}`,
        data: {
          title: req.body.title,
          overview: req.body.overview,
          poster_path: req.body.poster_path,
          popularity: req.body.popularity,
          tag: req.body.tag,
          status : req.body.status
        }
      })

      if (updatedTvSeries) {
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
        res.status(200).json( updatedTvSeries.data )
      }
    } catch (err) {
      res.status(500).json({
        message: `Update tv series failed ${err}`
      })
    }
  },

  deleteTvSeries: async (req,res) => {
    const tvseriesId = req.params.id

    try {
      const deletedTvSeries = await axios({
        method: `DELETE`,
        url: `http://localhost:3002/api/tvseries/${tvseriesId}`
      })

      if (deletedTvSeries) {
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
        res.status(200).json(deletedTvSeries.data)
      } else {
        res.status(500).json({
          message: `Delete TV Series failed, not found movie `
        })        
      }
    } catch (err) {
      res.status(500).json({
        message: `Delete TV Series error ${err}`
      })
    }
  }
}