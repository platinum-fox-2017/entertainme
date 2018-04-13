const redis = require('redis')
const clientRedis = redis.createClient()

module.exports = (req, res, next) => {
  clientRedis.get('entertainme', function(err, reply) {
    if (err) {
      // console.log('middlewares error reply ', err)
      next(err)
    } else if (!reply) {
      // console.log('middlewares not reply ')
      next()
    } else {
      // console.log('middlewares reply ', reply)
      res.json(JSON.parse(reply))
    }
  })
}