const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

it('should return wello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toInclude({
        error: 'Page not found.'
      });
    })
    .end(done);
});

it('should return users', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      expect(res.body).toInclude({
        name: 'Diego',
        age: 29
      });
    })
    .end(done);
});
