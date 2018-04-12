const redis = require("redis");
const axios = require('axios');
const { createCache } = require("../helpers/cache.helper")
const client = redis.createClient();

module.exports = {

  getAll: async (req, res) => {
    let cache = req.headers.cache;
    if(cache) { return res.status(200).send(cache); };
    let data = await createCache()
    return res.status(200).send(data);
  },

  createMovie: async (req, res) => {
    let cache = req.headers.cache;
    try {
      const movie = await axios.post('http://localhost:3001/movie', {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status,
      });
      if(cache) { cache.movie.push(movie.data); };
      createCache()
      return res.status(201).send(movie.data);
    } catch(err) {
      return res.status(500).send(err);
    }
  },

  createTv: async (req, res) => {
    let cache = req.headers.cache;
    try {
      const tv = await axios.post('http://localhost:3002/tv', {
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status,
      });
      if(cache) { cache.tv.push(tv.data); };
      createCache()
      return res.status(201).send(tv.data);
    } catch(err) {
      return res.status(500).send(err);
    }
  }
};