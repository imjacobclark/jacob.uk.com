import RenderApp from '../src/RenderApp';
import Dependencies from '../src/Dependencies';


describe('RenderApp', () => {
    it('Renders expected application body and meta data', () => {
        const expectedResponse = `
<html>
    <head>
    </head>
    <body>
        Hello World
    </body>
</html>`;

        const mockReactDOMServer = {
            renderToString: () => "Hello World"
        };

        const dependencies = new Dependencies({
            reactDOMServer: mockReactDOMServer
        });

        const renderApp = RenderApp(dependencies);

        expect(renderApp()).toEqual(expectedResponse);

    });
});