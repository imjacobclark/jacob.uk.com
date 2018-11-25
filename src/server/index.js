import App from '../components/App.jsx';

export default dependencies => {
    const React = dependencies.getReact();
    const ReactDOMServer = dependencies.getReactDOMServer();
    const express = dependencies.getExpress();
    const app = express();

    const template = application => `
<html>
    <head>
    </head>
    <body>
        ${application}
    </body>
</body>
`;

    const application = ReactDOMServer.renderToString(<App />);

    app.get('/', (req, res) => res.send(template(application)));
    
    return app;
};