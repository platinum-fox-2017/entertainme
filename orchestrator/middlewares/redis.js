const redis = require('redis')
const client = redis.createClient();

const checkRedis = (req, res, next) => {
    client.get('entertainme', (err, reply) => {
        if (reply) {
            res.status(200).json({
                message: `Get data success`,
                data: JSON.parse(reply)
            })
        } else {
            next()
        }
    })
}

module.exports = checkRedis