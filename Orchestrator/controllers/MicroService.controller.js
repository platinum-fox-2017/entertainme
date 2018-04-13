const axios = require('axios');
const redis = require('redis');
const client = redis.createClient()

const FetchData = async (req,res) => {

  try {
    const movie  = await axios.get('http://localhost:3001/movies')
    const tvseries  = await axios.get('http://localhost:3002/tvseries')
    let data = {
      movies: movie.data,
      tvseries: tvseries.data
    }
    client.set('entertainme', JSON.stringify(data))
    client.expire('entertainme', 600)
    res.status(200).send(data)
  } catch (err) {
    res.status(500).json({
      message: 'error fetching data'
    })
  }

}

const addMovie = async (req,res) => {
  try {
    const addMovie = await axios.post('http://localhost:3001/movies', req.body )
    res.status(200).json({
      message: 'add movie success'
    })
    client.del('entertainme', (err,reply) => {
      console.log(reply)
    })
  } catch (err) {
    res.status(500).json({
      message: 'failed to add movie',
      err
    })
  }
  
}

const addTVseries = async (req,res) => {
  try {
    const addMovie = await axios.post('http://localhost:3002/tvseries', req.body )
    res.status(200).json({
      message: 'add tvseries success'
    })
    client.del('entertainme', (err,reply) => {
      console.log(reply)
    })
  } catch (err) {
    res.status(500).json({
      message: 'failed to add tvseries error',
      err
    })
  }
}

module.exports = { FetchData, addMovie, addTVseries }