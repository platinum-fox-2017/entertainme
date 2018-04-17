const redis = require('redis')
const client = redis.createClient()

function checkCache (req, res, next) {
  console.log('checking redis');
  client.hgetall("entertainme", function (err, obj) {
    if (err) {
      console.log(err);
      res.status(500).send(err)
    } else if (obj.movies) {
      res.status(200).json({
        movies: JSON.parse(obj.movies),
        shows: JSON.parse(obj.shows)
      })
    } else {
      next()
    }
  });
}

 module.exports = {
   checkCache
 };
