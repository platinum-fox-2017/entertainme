const Tv = require('../models/Tv');
const redis = require("redis");
const client = redis.createClient();

module.exports = {
  tvCreate: async (req, res) => {
    try {
      const tv = await new Tv ({
        title: req.body.title,
        overview: req.body.overview,
        poster_path: req.body.poster_path,
        popularity: req.body.popularity,
        tag: req.body.tag,
        status: req.body.status,
      }).save()
        let cache = req.headers.cache
        if(!cache) { cache = []; };
        cache.push(tv);
        client.set('tv', JSON.stringify(cache));
        client.expire('tv', 500);
        return res.status(201).send(tv);
    } catch(err) {
      res.status(500).send(err);
    };
  },

  tvReadAll: async (req, res) => {
    let cache = req.headers.cache;
    if(cache) { return res.status(200).send(cache); };
    try {
      const tv = await Tv.find()
      return res.status(200).send(tv)
    } catch(err) {
      return res.status(500).send(err)
    }
  }
}