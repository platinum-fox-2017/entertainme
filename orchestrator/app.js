const express = require('express');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const redis = require('redis');
const client = redis.createClient()
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const fs = require('fs');

const app = express();

const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const typeDefs = fs.readFileSync('./graphql/orchestrator.gql', 'UTF8');
const resolvers = require('./graphql/resolvers');

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use('/', index);
app.use(cors());
app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

module.exports = app;
