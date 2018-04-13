const Movie = require('../model/movies')

module.exports = {
  showMovies: async(req,res)=> {
    try{
      const showMovies = await Movie.find().populate('Tag')
        res.status(201).send({
          message: 'show all movies success',
          data: showMovies
        })
    }catch(err){
      res.status(500).send({
        message: 'errorr show all movies'
      })
    }
  },
  addMovies: async(req,res) => {
    try{
      const movie = await Movie.create({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag
      })
      res.status(200).json({
        message: 'success add movies',
        data: movie
      })
    }catch(err){
      res.status(500).send({
        message: `error create movie ${err}`
      })
    }
  },
  update: async (req,res) => {
    try{
      let id = req.params.id
      const updateMovie = await Movie.updateOne({_id:id},{
      title: req.body.title,
      overview: req.body.overview,
      poster_path: req.body.poster_path,
      popularity: req.body.popularity,
      tag: req.body.tag
      })
      res.status(201).send({
        message: 'update movie success',
        data: updateMovie
      }) 
    }catch(err){
      res.status(500).send({
        message: 'error update movies'
      })
    }
  },
  deleteMov: async (req,res) => {
    try{
      let id = req.params.id
      const deleteMovies = await Movie.deleteOne({_id:id})
      res.status(201).send({
        message: 'success delete data',
        data: deleteMovies 
      })
    }catch(err){
      res.status(500).send({
        message: `errorr delete data ${err}`
      })
    }
  }
}