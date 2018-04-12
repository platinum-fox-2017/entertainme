const axios = require('axios')
const redis = require('redis')
const client = redis.createClient()

const getAllData = async (req,res) => {
  try{
    const movies = await axios.get('http://localhost:3001/movies')
    const tv = await axios.get('http://localhost:3002/tv')
    const result = {
      movies: movies.data,
      tv: tv.data
    }

    client.set('entertainme', JSON.stringify(result))
    client.expire('entertainme', 300);
    res.status(200).json(result)
  }catch (err){
    res.status(500).json({
      message: 'Error Cuy'
    })
  }
}

const addMovie = async(req,res) => {
  try {
    // console.log(req.body)
    const movie = await axios.post('http://localhost:3001/movies', {
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity
    })
    res.status(200).json({
      info: 'movie add sukses',
      data: movie.data
    });
    client.del('entertainme', (err, data) =>{
      console.log(data)
    })
  } catch (error) {
    res.status(500)
      .json({
        message: 'Error masukin data'
      });
  }
}

module.exports = {
  getAllData,
  addMovie
}