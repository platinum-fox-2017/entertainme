require('dotenv').config()
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express')
const { makeExecutableSchema }            = require('graphql-tools')
const fs            = require('fs')
const express       = require('express')
const bodyParser    = require('body-parser')
const cors          = require('cors')
const redis         = require('redis')
const cacheRedis    = require('./middlewares/chache')
const typeDefs      = fs.readFileSync('./graphql/main.graphql','utf-8')
const resolvers     = require('./graphql/mainResolve')

const app           = express()
const clientRedis   = redis.createClient()

const schema = makeExecutableSchema({
  typeDefs, 
  resolvers
})

clientRedis.on('ready', (err) => {
  err ? console.error('redis client connection error : ', err) : console.log('redis client connection success')
})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.use('/api/entertainme', cacheRedis, require('./routes/entertains'))

module.exports = app
