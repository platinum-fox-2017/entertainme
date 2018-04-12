const client = require('redis').createClient();

module.exports = {
  cache: async(req, res, next) => {
    client.get('movies', (err, result) => {
      if (result)
        req.headers.cache = JSON.parse(result);
      next();
    });
  }
}