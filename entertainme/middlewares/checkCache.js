const redis = require('redis')
const client = redis.createClient();

const checkCache = (req, res, next) => {
  client.get('entertainme', (err, reply) => {
    if(reply) {
      //Jika ada sisi
      console.log('Cache exist')
      res.status(201).json({
        message: 'succeed to get data',
        data: JSON.parse(reply)
      })
    } else {
      //Jika null
      console.log('cache not exist')
      next()
    }
  })
}

module.exports = checkCache

