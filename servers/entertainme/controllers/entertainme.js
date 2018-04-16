const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const moviesUrl = 'http://localhost:3001/movies'
const tvSeriesUrl = 'http://localhost:3002/tvSeries'

console.log('>> 2 controller/ entertainme')

const getMoviesAndTvSeries = async(req, res) => {
  try {
    console.log(' ==== masuk entertainme/ getalldata')
    const movies = await axios.get(moviesUrl)
    const tvSeries = await axios.get(tvSeriesUrl)

    const result = {
      movies: movies.data,
      tvSeries: tvSeries.data,
    }

    //without Redis
    // res.status(200).json({
    //   result
    // })

    //With Redis
    client.set('entertainme_data', JSON.stringify(result), 'EX', 100)
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const createMovie = async(req, res) => {
  try { 
    console.log('entertainme/ createMovie ')
    let addMovie = await axios.post(moviesUrl, {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      status: req.body.status
    })

    //Without Redis
    // res.status(201).json({
    //   message: '1 new movie added successfully',
    //   movie: addMovie.data
    // })

    //With Redis
    client.set('entertainme_data', JSON.stringify(addMovie.data), 'EX', 100)
    res.status(200).json(addMovie.data)
  } catch (error) { 
    res.status(500).json({
      message: error.message
    })
  }
}

const getMovies = async(req, res) => {
  try { 
    console.log('masuk entertainme/ getMovies')
    const movies = await axios.get(moviesUrl)
    //without Redis
    // res.status(200).json({
    //   movies: movies.data
    // })

    //With Redis
    client.set('entertainme_data', JSON.stringify(movies.data), 'EX', 100)
    res.status(200).json(movies.data)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateMovie = async (req, res) => {
  try {
    let movieUpdated = await axios.put(`${moviesUrl}/${req.params.id}`,{
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      status: req.body.status      
    }) 

    //without Redis
    res.status(200).json({
      info: 'Update Movie Success',
      data: movieUpdated.data
    })

    //with Redis
    // client.set('Entertainme', JSON.stringify(movieUpdated.data))
    // client.expire('Entertainme', 800)
    // res.status(200).json(movieUpdated.data)

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteMovie = async (req, res) => {
  try {
    await axios.delete(`${moviesUrl}/${req.params.id}`) 

    res.status(200).json({
      info: 'Delete Movie Success',
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const createTvSeries = async(req, res) => {
  try { 
    let addTvSeries = await axios.post(tvSeriesUrl, {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      status: req.body.status
    })

    res.status(201).json({
      message: '1 new Tv Series added successfully',
      tvSeries: addTvSeries.data
    })

    //With Redis
    client.set('Entertainme', JSON.stringify(addTvSeries.data))
    client.expire('Entertainme', 800)
    res.status(200).json(addTvSeries.data)

  } catch (error) { 
    res.status(500).json({
      message: error.message
    })
  }
}

const getTvSeries = async(req, res) => {
  try { 
    const tvSeries = await axios.get(tvSeriesUrl)
    
    //without Redis
    // res.status(200).json({
    //   tvSeries: tvSeries.data
    // })

    //With redis
    client.set('entertainme_data', JSON.stringify(tvSeries.data), 'EX', 100)
    res.status(200).json(tvSeries.data)
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const updateTvSeries = async (req, res) => {
  try {
    let tvSeriesUpdated = await axios.put(`${tvSeriesUrl}/${req.params.id}`,{
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      status: req.body.status      
    }) 

    res.status(200).json({
      info: 'Update Tv Series Success',
      data: tvSeriesUpdated.data
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

const deleteTvSeries = async (req, res) => {
  try {
    await axios.delete(`${tvSeriesUrl}/${req.params.id}`) 

    res.status(200).json({
      info: 'Delete Tv Series Success',
    })
  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
}

module.exports = {
  getMoviesAndTvSeries,
  createMovie,
  getMovies,
  updateMovie,
  deleteMovie,
  createTvSeries,
  getTvSeries,
  updateTvSeries,
  deleteTvSeries
}
