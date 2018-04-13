const client = require('redis').createClient();

module.exports = {
  cacheMovies: async(req, res, next) => {
    client.get('movies', (err, result) => {
      if (result)
        req.headers.cache = JSON.parse(result);
      next();
    });
  },
  cacheSeries: async(req, res, next) => {
    client.get('series', (err, result) => {
      if (result)
        req.headers.cache = JSON.parse(result);
      next();
    });
  },
}