const express = require('express');
const request = require('supertest');

function createApp() {
  const app = express();
  app.get('/health', (_request, response) => response.json({ status: 'ok' }));
  return app;
}

describe('health endpoint integration', () => {
  it('returns a machine-readable healthy status', async () => {
    const response = await request(createApp()).get('/health');
    expect(response.status).toBe(200);
    expect(response.headers['content-type']).toMatch(/json/);
    expect(response.body).toEqual({ status: 'ok' });
  });
});
