import renderer from '../../src/server/renderer/index.jsx';
import Dependencies from '../../src/server/Dependencies';

describe('renderer', () => {
  it('Renders expected application body and meta data', () => {
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

    const mockReactDOMServer = {
      renderToString: () => 'Hello World',
    };

    const dependencies = new Dependencies({
      reactDOMServer: mockReactDOMServer,
    });

    const render = renderer(dependencies);

    expect(render()).toEqual(expectedResponse);
  });

  it('Renders homepage route', () => {
    const dependencies = new Dependencies();
    const render = renderer(dependencies);

    expect(render("/")).toContain("Homepage");
  });

  it('Renders about me route', () => {
    const dependencies = new Dependencies();
    const render = renderer(dependencies);

    expect(render("/about-me")).toContain("About me");
  });

  it('Renders not found route', () => {
    const dependencies = new Dependencies();
    const render = renderer(dependencies);

    expect(render("/unknown")).toContain("404...");
  });
});
