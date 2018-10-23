const request = require('supertest');

describe('GET /some-page/some-action', () => {
  it('should response OK', async () => {
    await request(sails.hooks.http.app)
      .get('/some-page/some-action')
      .query({requiredParam: 'some_value'})
      .expect(200);
  });
});

