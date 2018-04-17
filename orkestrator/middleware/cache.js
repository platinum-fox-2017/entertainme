const redis = require('redis')
const client = redis.createClient()
const cache = (req,res,next) => {
  client.get('entertainme', (err, reply) => {
    if (err) {
      console.log(err)
    }else if(reply){
      res.status(200).json({
        message: 'ini redis',
        data: JSON.parse(reply)
      })
      console.log(reply)
    }else{
      next()
    }
  })
}

module.exports = cache