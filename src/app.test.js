const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('returns the onboarding health message', async () => {
    const response = await request(app).get('/');

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Hello World! Onboarding environment successfully configured.'
    });
  });
});