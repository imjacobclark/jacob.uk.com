import request from 'supertest';
import Dependencies from '../../src/Dependencies';


describe('Server routes', () => {
  it('/ should be a matched route', () => {
    const dependencies = new Dependencies();

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

describe('Express router', () => {
  it('Returns expected payload for (/) index route', done => {
    const expectedResponse = `
<html>
    <head>
    </head>
    <body>
        Hello World
    </body>
</body>
`
    const mockRes = {
      send: jest.fn()
    }

    const mockExpress = () => {
      return {
        get: (route, callback) => {
          callback(null, mockRes);

          expect(route).toBe("/");
          expect(mockRes.send).toBeCalledWith(expectedResponse);

          done();
        }
      };
    };

    const mockReactDOMServer = {
      renderToString: () => "Hello World"
    };

    const dependencies = new Dependencies({
      express: mockExpress,
      reactDOMServer: mockReactDOMServer
    });

    dependencies.getApp();
  })
})
