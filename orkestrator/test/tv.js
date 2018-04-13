const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app.js'); 
const faker = require('faker')
const redis = require('redis')
const client = redis.createClient()

chai.use(chaiHttp); 

var tvId
describe('Tv Crud', function() {
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
        client.get('entertain', function(err, reply) {
          let entertain = JSON.parse(reply)
          let newTv = entertain.series.data.filter( ent =>{
           return  ent._id == tvId
          })
          expect(newTv[0]).to.be.an('object')
          expect(newTv[0]).to.have.property('title')
          done()
        })
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
         
        client.get('entertain', function(err, reply) {
          let entertain = JSON.parse(reply)
          let updateTv = entertain.series.data.filter( ent =>{
           return  ent._id == tvId
          })
          expect(updateTv[0]).to.be.an('object')
          expect(updateTv[0]).to.have.property('title')
          expect(updateTv[0].title).to.equal(res.body.data.title)
          done()
        })
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
        client.get('entertain', function(err, reply) {
          let entertain = JSON.parse(reply)
          let deleteTv = entertain.series.data.filter( ent =>{
           return  ent._id == tvId
          })
          expect(deleteTv).to.be.an('array')
          expect(deleteTv.length).to.equal(0)
          done()
        })
      })
  }) 
})

