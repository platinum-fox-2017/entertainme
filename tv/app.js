const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({
  extended: false
}))

app.use(bodyParser.json())

const tv = require('./routes/tv.js')

mongoose.connect('mongodb://localhost/tv', function (err) {
  if (err) {
      throw new Error()
  }
  console.log('MongoDB TV is Connected')
})

app.use('/tv', tv)

app.listen(3002, () => console.log('Example app listening on port 3002!'))
