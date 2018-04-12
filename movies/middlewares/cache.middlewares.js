const redis = require("redis");
const client = redis.createClient();

module.exports = {
  checkCahce: (req, res, next) => {
    client.get('movies', async (err, reply) => {
      if(err) { return res.status(500).send(err); }
      else if(reply) { req.headers.cache = JSON.parse(reply) }
      next();
    })
  }
}