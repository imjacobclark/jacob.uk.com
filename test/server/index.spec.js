import request from 'supertest';
import app from '../../src/server';

describe('Server routes', () => {
    it('/ should be a matched route', () => {
        request(app)
            .get('/')
            .expect('Content-Type', "text/html; charset=utf-8")
            .expect(200)
            .end((err, res) => {
                expect(res.text).toContain("Hello World!");
                if (err) throw err;
            });
    });
});