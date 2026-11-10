const request = require('supertest');
const app = require('./app');
test('GET / renvoie Hello DevOps', async () => {
const res = await request(app).get('/');
expect(res.status).toBe(200);
expect(res.body.message).toBe('Hello DevOps');
});
test('GET /health renvoie ok', async () => {
const res = await request(app).get('/health');
expect(res.body.status).toBe('ok');
});
