const Movie = require('../models/Movie');
const redis = require("redis");
const client = redis.createClient();

module.exports = {
  movieCreate: async (req, res) => {
    try {
      const movie = await new Movie ({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status,
      }).save()
        let cache = req.headers.cache
        if(!cache) { cache = []; };
        cache.push(movie);
        client.set('movies', JSON.stringify(cache));
        return res.status(201).send(movie);
    } catch(err) {
      res.status(500).send(err);
    };
  },

  movieReadAll: async (req, res) => {
    let cache = req.headers.cache;
    if(cache) { return res.status(200).send(cache) }
    try {
      const movie = await Movie.find();
      // client.set('movies', JSON.stringify(movie));
      return res.status(200).send(movie);
    } catch(err) {
      return res.status(500).send(err);
    }
  }
};