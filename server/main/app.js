require('dotenv').config()
const express       = require('express')
const bodyParser    = require('body-parser')
const cors          = require('cors')
const redis         = require('redis')
const clientRedis   = redis.createClient()
const cacheRedis    = require('./middlewares/chache')

const app = express()

clientRedis.on('ready', (err) => {
  err ? console.error('redis client connection error : ', err) : console.log('redis client connection success')
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/entertainme', cacheRedis, require('./routes/entertains'))

module.exports = app
