const chai = require('chai');

const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../app.js'); 

chai.use(chaiHttp); 

describe('Entertaintme', function() {
  it('Should Get Data from movies and tv services', function(done) {
    chai.request(app)
      .get('/entertainme')
      .end(function(err, res) {
         expect(res).to.have.status(200);
         expect(res).to.be.json;
         expect(res.body).to.have.property('movies');
         expect(res.body).to.have.property('series');
         expect(res.body.movies.info).to.equal('movies found successfully');
         expect(res.body.series.info).to.equal('tv found successfully');
         expect(res.body.movies).to.have.property('data');
         expect(res.body.series).to.have.property('data');
         done();
      })
  }) 
})

