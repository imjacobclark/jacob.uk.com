import App from './components/App.jsx';

export default dependencies => () => {
    const React = dependencies.getReact();
    const ReactDOMServer = dependencies.getReactDOMServer();

    return `
<html>
    <head>
    </head>
    <body>
        ${ReactDOMServer.renderToString(<App />)}
    </body>
</html>`;
}