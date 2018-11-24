import request from 'supertest';
import Dependencies from '../../src/Dependencies';

const dependencies = new Dependencies();

describe('Server routes', () => {
  it('/ should be a matched route', () => {
    request(dependencies.getApp())
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        expect(res.text).toContain('Jacob Clark');
        if (err) throw err;
      });
  });
});
