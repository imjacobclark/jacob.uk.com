import App from '../../components/App.jsx';

export default dependencies => () => {
    const React = dependencies.getReact();
    const ReactDOMServer = dependencies.getReactDOMServer();

    return `
<html>
    <head>
    </head>
    <body>
        <main id="jacobclarkxyz__main">
            ${ReactDOMServer.renderToString(<App runtime="server"/>)}
        </main>
        <script src="client.bundle.js"></script>
    </body>
</html>`;
}