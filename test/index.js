const initApp = require('./../dist/server').initApp
const request = require('supertest')
describe('Check application endpoints', function () {
  var app, date

  // Timeout for tests that take time
  this.timeout(10000)

  // Called once before any of the tests in this block begin.
  before(function (done) {
    app = initApp()
    // Any asynchronous action with a callback.
    app.listen(9999, function (err) {
      if (err) {
        console.log('ERROR!', err)
        return done(err)
      }
      done()
    })
  })

  // Called after all of the tests in this block complete.
  after(function () {
    console.log('Our application tests done!')
  })

  it('api/discounts should send back a JSON object with discounts array', function (done) {
    request(app)
      .get('/api/discounts')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, function (err, res) {
        if (err) {
          throw new Error('no response')
        }
        try {
          const discounts = res.body.discounts
          if (discounts.length === 0) {
            throw new Error('No discounts available!')
          } else {
            return done()
          }
        } catch (error) {
          console.log('error', error)
          throw new Error('no discounts response')
        }
      })
  })

  it('endpoint api/discounts only return positive discounts', function (done) {
    request(app)
      .get('/api/discounts')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, function (err, res) {
        if (err) {
          throw new Error('no response')
        }
        try {
          const discounts = res.body.discounts
          if (discounts.length === 0) {
            throw new Error('No discounts available!')
          } else {
            const negative = discounts.find((d) => d.discount <= 0)
            if (negative) throw new Error('negative discount detected!')
            return done()
          }
        } catch (error) {
          console.log('error', error)
          throw new Error('no discounts response')
        }
      })
  })

  it('api/products should send back a JSON object with products array', function (done) {
    request(app)
      .get('/api/products')
      .set('Content-Type', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, function (err, res) {
        if (err) {
          throw new Error('no response')
        }
        try {
          const products = res.body.products
          if (products.length === 0) {
            throw new Error('No products available!')
          } else {
            return done()
          }
        } catch (error) {
          console.log('error', error)
          throw new Error('no products response')
        }
      })
  })
})
