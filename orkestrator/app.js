const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const entertainme = require('./routes/entertainme')
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))

const typeDefs = require('./graphql/movies')
const resolvers = require('./graphql/movie.resolvers')

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.use('/entertainme', entertainme)

app.listen(3000, () => console.log('Example app listening on port 3000!'))