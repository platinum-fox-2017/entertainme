const axios = require('axios');
const setCache = require('../helper/setCache')

module.exports = {
  showMovies: async(req,res)=> {
    try{
      const movies = await axios.get('http://localhost:3001/movie');
        res.status(201).json({
          message: 'show all movies success',
          data: movies.data
        })
    }catch(err){
      res.status(500).json({
        message: `errorr show all movies ${err}`
      })
    }
  },
  addMovies: async(req,res) => {
    try{
      const movie = await axios.post('http://localhost:3001/movie',{
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag
      })
      res.status(200).json({
        message: 'success add movies',
        data: movie.data
      })
      showMovieAndTV(req,res)
    }catch(err){
      res.status(500).json({
        message: `error create movie ${err}`
      })
    }
  },
  showTv: async(req,res)=> {
    try{
      const tv = await axios.get('http://localhost:3002/tv')
        res.status(201).json({
          message: 'show all tv success',
          data: tv.data
        })
    }catch(err){
      res.status(500).json({
        message: 'errorr show all tv'
      })
    }
  },
  addTv: async(req,res) => {
    try{
      const tv = await axios.post('http://localhost:3002/tv',{
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag
      })
      res.status(200).json({
        message: 'success add tv',
        data: tv.data
      })
      showMovieAndTV(req,res)      
    }catch(err){
      res.status(500).json({
        message: `error create tv ${err}`
      })
    }
  },
  showMovieAndTV: async (req, res) => {
    try {
      const movies = await axios.get('http://localhost:3001/movie');
      const tv = await axios.get('http://localhost:3002/tv');
      const result = {
        movies: movies.data,
        tv: tv.data
      }
      setCache(result)
      res.status(200).json({
        message: 'success show data movies and tv',
        data: result
      });
    } catch (err) {
      res.status(500).json({
          message: `an error occured while getting data ${err}`
        });
    }
  }
}