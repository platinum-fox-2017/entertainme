const redis = require('redis')
const client = redis.createClient()

module.exports = {
  cache (req, res, next) {
    client.get('entertainme', function(err, reply) {
      if (err) {
        console.log(err)
      } else if (reply) {
        console.log('in')
        res.status(200).json({
          message: 'redis fetched',
          result: JSON.parse(reply)
        })
      } else {
        next()
      }
    })
  }
}