const redis = require('redis');
const client = redis.createClient()

const getAllMovieCache = (req, res, next) => {
  client.get('movie', (err, reply) => {
    reply ? res.status(200).json(JSON.parse(reply)) : next()
    if (err) {
      res.status(500).json('error')
    }
  })
}

module.exports = {
  getAllMovieCache
}