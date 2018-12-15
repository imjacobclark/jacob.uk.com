export default dependencies => url => {
    const React = dependencies.getReact();
    const ReactDOMServer = dependencies.getReactDOMServer();
    const StaticRouter = dependencies.getReactRouterDom().StaticRouter;
    const context = {};

    const App = dependencies.getAppComponent();

    return `
<html>
    <head>
    </head>
    <body>
        <main id="jacobclarkxyz__main">
            ${ReactDOMServer.renderToString(
                <StaticRouter location={url} context={context}>
                    <App runtime="server"/>
                </StaticRouter>
            )}
        </main>
        <script src="client.bundle.js"></script>
    </body>
</html>`;
}