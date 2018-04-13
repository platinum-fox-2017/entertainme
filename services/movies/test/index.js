const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app.js'); 
const faker = require('faker')

chai.use(chaiHttp); 
var token
var name = faker.name.findName()
var email = faker.internet.email()

var movieId
describe('Movies Crud', function() {
  it('Should create new Movie', function(done) {
    chai.request(app)
      .get('/movies')
      .end(function(err, res) {
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         expect(res.body).to.have.property('info');
         expect(res.body.info).to.equal('movies found successfully');
         expect(res.body).to.have.property('data');
         done();
      })
  }) 
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
         done();
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
         done();
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
         done();
      })
  }) 
})

