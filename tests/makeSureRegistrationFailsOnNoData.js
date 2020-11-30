const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../app')

// Configure chai
chai.use(chaiHttp)
chai.should()

describe('make sure that registration fails on no data', () => {
  it('should return 400', done => {
    chai.request(app)
      .post('/register')
      .end((err, res) => {
        if (err)console.error(err)
        res.should.have.status(400)
        // res.body.should.be.a('object')
        done()
      })
  })
})
