const request = require('supertest');
const {createSandbox} = require('sinon');

describe('GET /some-page/some-action', () => {
  before(() => {
    this.sandbox = createSandbox();
    this.sandbox.stub(sails.helpers, 'someHelper')
      .withArgs('some_value').returns('someProcessedValue')
      .withArgs('isError').returns('someError');
  });

  after(() => {
    this.sandbox.restore();
  });

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

