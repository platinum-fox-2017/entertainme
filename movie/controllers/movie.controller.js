const Movie = require('../models/movie.model');
const client = require('redis').createClient();

module.exports = {
  create: async(req, res) => {
    try {
      let movie = await new Movie(req.body).save();

      if(req.headers.cache) {
        let newCache = JSON.parse(req.headers.cache);
        newCache.push(movie);
        client.set('movies', JSON.stringify(newCache));
      }
      
      return res.status(201).send({ info: 'movie add successfully' });
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  },

  loadAll: async(req, res) => {
    try {
      let movies = await Movie.find();

      client.set('movies', JSON.stringify(movies));

      return res.status(200).send({
        info: 'movies found successfully',
        data: movies
      });
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  },

  update: async(req, res) => {
    try {
      let movie = await Movie.findById(req.params.id);
      movie.set(req.body).save();
      
      if(req.headers.cache) {
        let newCache = JSON.parse(req.headers.cache)
        let index = newCache.findIndex(mov => mov._id == req.params.id);
        newCache.splice(index, 1, movie);
        client.set('movies', JSON.stringify(newCache));
      }
      return res.status(201).send({ info: 'movie update successfully' });
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  },

  drop: async(req, res) => {
    try {
      let movie = await Movie.findByIdAndRemove(req.params.id);

      if(req.headers.cache) {
        let newCache = JSON.parse(req.headers.cache)
        let index = newCache.findIndex(mov => mov._id == req.params.id);
        newCache.splice(index, 1);
        client.set('movies', JSON.stringify(newCache));
      }

      return res.status(201).send({ info: 'movie delete successfully' });
    } catch (err) {
      return res.status(500).send({ info: err.message });
    }
  }
}