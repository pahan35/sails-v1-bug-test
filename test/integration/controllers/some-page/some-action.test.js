const request = require('supertest');

describe('GET /some-page/some-action', () => {
  it('should response OK', async () => {
    await request(sails.hooks.http.app)
      .get('/some-page/some-action')
      .query({requiredParam: 'some_value'})
      .expect(200);
  });

  it('should response with error', async () => {
    await request(sails.hooks.http.app)
      .get('/some-page/some-action')
      .query({requiredParam: 'isError'})
      .expect(500);
  });
});

