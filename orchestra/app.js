const express = require('express')
const bodyParser = require('body-parser')
const redis = require('redis')
const PORT = 3000

const client = redis.createClient()

const entertainme = require('./routes/index')

const app = express()
client.on('connect', () => {
  console.log('redis connected!')
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/entertainme', entertainme)

app.listen(PORT, () => {
  console.log(`Movies running on port ${PORT}`)
})