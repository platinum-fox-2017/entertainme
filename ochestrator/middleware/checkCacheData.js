const redis = require('redis');
const client = redis.createClient();

const checkCache = (req, res, next) => {
    client.get('entertainme', (err, reply) => {
        if (reply) {
            req.cache = true
            req.data = JSON.parse(reply)
            next()
        } else {
            req.cache = false
            next()
        }
    })
}

module.exports = checkCache