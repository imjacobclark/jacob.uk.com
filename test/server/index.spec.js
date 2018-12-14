import request from 'supertest';
import Dependencies from '../../src/server/Dependencies';

describe('Server routes', () => {
  it('/ should be a matched route', () => {
    const dependencies = new Dependencies();

    request(dependencies.getApp())
      .get('/')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        expect(res.text).toContain('Homepage');
        if (err) throw err;
      });
  });

  it('/about-me should be a matched route', () => {
    const dependencies = new Dependencies();

    request(dependencies.getApp())
      .get('/about-me')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        expect(res.text).toContain('About me');
        if (err) throw err;
      });
  });

  it('/unknown should be a matched route', () => {
    const dependencies = new Dependencies();

    request(dependencies.getApp())
      .get('/unknown')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        expect(res.text).toContain('404...');
        if (err) throw err;
      });
  });
});

describe('Express router', () => {
  it('Returns expected payload for (/) index route', (done) => {
    const expectedResponse = `
<html>
    <head>
    </head>
    <body>
        <main id="jacobclarkxyz__main">
            Hello World
        </main>
        <script src="client.bundle.js"></script>
    </body>
</html>`;

    const mockRes = {
      send: jest.fn(),
    };

    const mockReq = {
      url: '/',
    };

    const mockExpress = () => ({
      get: (route, callback) => {
        callback(mockReq, mockRes);

        expect(route).toBe('*');
        expect(mockRes.send).toBeCalledWith(expectedResponse);

        done();
      },
      use: () => {},
    });

    mockExpress.static = () => {};

    const mockReactDOMServer = {
      renderToString: () => 'Hello World',
    };

    const dependencies = new Dependencies({
      express: mockExpress,
      reactDOMServer: mockReactDOMServer,
    });

    dependencies.getApp();
  });

  it('Serves static files from the ./dist folder', (done) => {
    const mockExpress = () => ({
      get: () => {},
      use: (dir) => {
        expect(dir).toBe('my-mocked-dir');
        done();
      },
    });

    mockExpress.static = jest.fn().mockReturnValue('my-mocked-dir');

    const dependencies = new Dependencies({
      express: mockExpress,
    });

    dependencies.getApp();

    expect(mockExpress.static).toBeCalledWith('./dist');
  });
});
