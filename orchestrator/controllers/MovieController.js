const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

module.exports = {
  createMovie: async (req, res) => {
    try {
      const newMovie = await axios({
        method: `POST`,
        url: `http://localhost:3001/api/movies`,
        data: {
          title: req.body.title,
          overview: req.body.overview,
          poster_path: req.body.poster_path,
          popularity: req.body.popularity,
          tag: req.body.tag,
          status : req.body.status
        }
      })

      if (newMovie) {
        client.get('entertainme', (err, reply) => {
          let existingCache = JSON.parse(reply)
          existingCache.movies.push(newMovie.data.data)
          client.set('entertainme', JSON.stringify(existingCache))
          return res.status(200).json(newMovie.data.data)
        })
      } else {
        res.status(202).json({
          message: `Create new movie failed`,
          data: {}
        })
        return
      }
    } catch (err) {
      res.status(500).json({
        message: `Create new movie error ${err}`
      })
    }
  },

  updateMovie: async (req,res) => {
    const movieId = req.params.id
    try {
      const updatedMovie = await axios({
        method: `PUT`,
        url: `http://localhost:3001/api/movies/${movieId}`,
        data: {
          title: req.body.title,
          overview: req.body.overview,
          poster_path: req.body.poster_path,
          popularity: req.body.popularity,
          tag: req.body.tag,
          status : req.body.status
        }
      })

      if (updatedMovie) {
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
        res.status(200).json( updatedMovie.data )
      }
    } catch (err) {
      res.status(500).json({
        message: `Update movie failed ${err}`
      })
    }
  },

  deleteMovie: async (req,res) => {
    const movieId = req.params.id

    try {
      const deletedMovie = await axios({
        method: `DELETE`,
        url: `http://localhost:3001/api/movies/${movieId}`
      })

      if (deletedMovie) {
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
        console.log(deletedMovie.data)
        res.status(200).json(deletedMovie.data)
      } else {
        res.status(500).json({
          message: `Delete movie failed, not found movie `
        })        
      }
    } catch (err) {
      res.status(500).json({
        message: `Delete movie error ${err}`
      })
    }
  }
}