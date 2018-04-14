const redis = require('redis')
const client = redis.createClient()

client.on('connect', () => {
  console.log('Redis connected')
})

const caching = (req, res, next) => {
  client.get('entertainme_data', (error, reply) => {
    console.log('>> 00 middleware/ caching/')

    reply ? res.status(200).json(JSON.parse(reply)) : next()
  })
}

module.exports = caching
