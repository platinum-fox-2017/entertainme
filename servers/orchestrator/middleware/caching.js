const redis = require('redis')
const client = redis.createClient()

client.on('connect', () => {
  console.log('Redis connected')
})

const caching = (req, res, next) => {
  client.get('orchestrator-data', (error, reply) => {
    if(error) {
      console.log(error)
    } else if (!reply) {
      next()
    } else {
      res.status(200).json(JSON.parse(reply))
    }
  })
}

module.exports = caching
