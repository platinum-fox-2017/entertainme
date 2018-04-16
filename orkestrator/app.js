require('dotenv').config()
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose')
const redis = require('redis');
const cors = require('cors');
const { graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const axios = require('axios');

const indexRouter = require('./routes/index');

const client = redis.createClient();
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const dbUrl = process.env.DBURL; //Online Db
mongoose.connect(dbUrl, (err) => {
  err? console.log('Not connected to Database') : console.log('Connected to Database');
});

client.on('connect', (err) => {
  err? console.log('Not connected to Redis') : console.log('Connected to Redis')
})

// The GraphQL schema in string form
const typeDefs = `
  type Query {
    movies: [Movie]
    tv: [Tv]
    all: All
  }
  type Mutation {
    createMovie(
      title: String,
      overview: String,
      poster_path: String,
      popularity: Float,
      status:  String
    ): Input
    createTv(
      title: String,
      overview: String,
      poster_path: String,
      popularity: Float,
      status:  String
    ): Input
  }
  type Movie {
    _id: String,
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    status:  String,
    createdAt: String,
    updatedAt: String,
  }
  type Tv {
    _id: String,
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    status:  String,
    createdAt: String,
    updatedAt: String,
  }
  type All {
    movies: [Movie],
    tv: [Tv]
  }
  type Input {
    title: String,
    overview: String,
    poster_path: String,
    popularity: Float,
    status:  String,
  }
`;

// The resolvers
const resolvers = {
  Query: {
    movies: async () => {
      let { data } = await axios.get('http://localhost:3001/movie');
      return data
    },
    tv: async () => {
      let { data } = await axios.get('http://localhost:3002/tv');
      return data
    },
    all: async () => {
      let movies = await axios.get('http://localhost:3001/movie');
      let tv = await axios.get('http://localhost:3002/tv');
      return {
        movies: movies.data,
        tv: tv.data
      }
    },
  },
  Mutation: {
    createMovie: async (_, args) => {
      let { data } = await axios.post('http://localhost:3001/movie',args);
      return data
    },
    createTv: async (_, args) => {
      let { data } = await axios.post('http://localhost:3002/tv',args);
      return data
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

app.use('/', indexRouter);
app.use('/graphql', graphqlExpress({ schema }))

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
