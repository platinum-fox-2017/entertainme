const redis = require("redis");
const client = redis.createClient();


const cache = (req, res, next) => {
  client.get('entertainme', (error, reply) => {
    if(!reply) {
      next() 
    }else{
      res.status(200).json(JSON.parse(reply));
    }
  });
}

module.exports = cache;