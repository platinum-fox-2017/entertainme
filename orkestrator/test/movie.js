const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app.js'); 
const faker = require('faker')
const redis = require('redis')
const client = redis.createClient()

chai.use(chaiHttp); 

var movieId
describe('Movies Crud', function() {
  it('Should create new Movie', function(done) {
    chai.request(app)
      .post('/movies')
      .send({ 
        poster_path:  faker.image.imageUrl(),
        overview: faker.lorem.paragraph(),
        title:   faker.lorem.sentence(),
        popularity: faker.random.number(),
        tag: faker.lorem.word,
       })
      .end(function(err, res) {
         expect(res).to.have.status(201);
         expect(res).to.be.json;
         expect(res.body).to.have.property('info');
         expect(res.body.info).to.equal('Success Add Movie');
         expect(res.body).to.have.property('data');
         movieId = res.body.data._id
        client.get('entertain', function(err, reply) {
          let entertain = JSON.parse(reply)
          let newMovie = entertain.movies.data.filter( ent =>{
           return  ent._id == movieId
          })
          expect(newMovie[0]).to.be.an('object')
          expect(newMovie[0]).to.have.property('title')
          done()
        })
      })
  }) 
  it('Should Update Movie', function(done) {
    chai.request(app)
      .put(`/movies/${movieId}`)
      .send({ 
        poster_path:  faker.image.imageUrl(),
        overview: faker.lorem.paragraph(),
        title:   faker.lorem.sentence(),
        popularity: faker.random.number(),
        tag: faker.lorem.word,
       })
      .end(function(err, res) {
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         expect(res.body).to.have.property('info');
         expect(res.body.info).to.equal('Success Update Movie');
         expect(res.body).to.have.property('data');
         
        client.get('entertain', function(err, reply) {
          let entertain = JSON.parse(reply)
          let updateMovie = entertain.movies.data.filter( ent =>{
           return  ent._id == movieId
          })
          expect(updateMovie[0]).to.be.an('object')
          expect(updateMovie[0]).to.have.property('title')
          expect(updateMovie[0].title).to.equal(res.body.data.title)
          done()
        })
      })
  }) 
  it('Should Delete a Movie', function(done) {
    chai.request(app)
      .del(`/movies/${movieId}`)
      .end(function(err, res) {
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         expect(res.body).to.have.property('info');
         expect(res.body.info).to.equal('Success Delete Movie');
         expect(res.body).to.have.property('data');
        client.get('entertain', function(err, reply) {
          let entertain = JSON.parse(reply)
          let deleteMovie = entertain.movies.data.filter( ent =>{
           return  ent._id == movieId
          })
          expect(deleteMovie).to.be.an('array')
          expect(deleteMovie.length).to.equal(0)
          done()
        })
      })
  }) 
})

