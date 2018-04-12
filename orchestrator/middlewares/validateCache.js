const redis = require('redis')
const client = redis.createClient();

const validateCache = (req,res,next) => {
  client.get('entertainme', (err,reply) => {
    if (reply) {
      res.status(200).json({
        message: `Get data success`,
        data: JSON.parse(reply)
      })
      return
    } else {
      next()
    }
  })
}

module.exports = validateCache