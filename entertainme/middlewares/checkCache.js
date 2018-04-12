const redis = require('redis')
const client = redis.createClient();

const checkCache = (req, res, next) => {
  client.get('entertainme', (err, reply) => {
    if(reply) {
      console.log('Cache exist')
      // res.status(201).json({
      //   message: 'succeed to get data',
      //   data: JSON.parse(reply)
      // })
      req.status = true
      req.data = JSON.parse(reply)
      next()
    } else {
      console.log('cache not exist')
      req.status = false
      next()
    }
  })
}

module.exports = checkCache

