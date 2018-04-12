const jwt = require('jsonwebtoken')

module.exports = (req,res,next) => {
  jwt.verify(req.headers.apptoken, process.env.JWT_KEY, (err, decoded) => {
    // console.log('get decoded...', decoded)
    if (decoded !== undefined) {
      req.decoded = decoded.user
      next()
    }  else {
      res.send({ message: 'You don\'t have authorization !!' })
    }
  })
}