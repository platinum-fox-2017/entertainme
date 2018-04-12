const redis = require('redis')
const client = redis.createClient()

const checkMovieAndTvCache = (req, res, next) => {
  client.get('entertain', function(err, reply) {
    err && res.status(500).json({info: "Somthing Went Wrong on Redis"})
    reply ? res.status(200).json(JSON.parse(reply)) : next()
  })  
}

module.exports = {
  checkMovieAndTvCache
}
