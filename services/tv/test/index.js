const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app.js'); 
const faker = require('faker')

chai.use(chaiHttp); 

var tvId
describe('Tvs Crud', function() {
  it('Should create new Tv', function(done) {
    chai.request(app)
      .get('/tvs')
      .end(function(err, res) {
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         expect(res.body).to.have.property('info');
         expect(res.body.info).to.equal('tv found successfully');
         expect(res.body).to.have.property('data');
         done();
      })
  }) 
  it('Should create new Tv', function(done) {
    chai.request(app)
      .post('/tvs')
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
         expect(res.body.info).to.equal('Success Add Tv');
         expect(res.body).to.have.property('data');
         tvId = res.body.data._id
         done();
      })
  }) 
  it('Should Update Tv', function(done) {
    chai.request(app)
      .put(`/tvs/${tvId}`)
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
         expect(res.body.info).to.equal('Success Update Tv');
         expect(res.body).to.have.property('data');
         done();
      })
  }) 
  it('Should Delete a Tv', function(done) {
    chai.request(app)
      .del(`/tvs/${tvId}`)
      .end(function(err, res) {
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         expect(res.body).to.have.property('info');
         expect(res.body.info).to.equal('Success Delete Tv');
         expect(res.body).to.have.property('data');
         done();
      })
  }) 
})

