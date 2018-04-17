require('dotenv').config();

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const port = process.env.PORT || 3000;

const app = express();

const resolvers = require('./graphql/movie.resolver');
const typeDefs = require('./graphql/movie');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use('/', require('./routes/index.api.route'));
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
})