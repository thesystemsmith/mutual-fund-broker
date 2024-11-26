const request = require('supertest');
const app = require('../app');

describe('Endpoints', () => {
    it('should respond with user details', async () => {
        const res = await request(app).get('/api/users');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('users');
    });
});
