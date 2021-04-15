const request = require('supertest');


describe('GET /', function () {
  it('tests the test endpoint', async done => {
    const response = await request('https://www.google.com').get('/');
    expect(response.status).toBe(200);
    done();
  });
});
