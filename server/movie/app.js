require('dotenv').config()
const express       = require('express')
const bodyParser    = require('body-parser')
const cors          = require('cors')
const mongoose      = require('mongoose')

const app = express()

mongoose.connection.openUri('mongodb://localhost:27017/entertainme-movie')
mongoose.Promise = global.Promise
mongoose.connection.once('open', () => {
  console.log('mongoose-movies connection success')
}).on('error', (error) => {
  console.error('connection error', error)
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/api/movies', require('./routes/movies'))

module.exports = app
