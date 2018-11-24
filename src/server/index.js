import Heading from '../components/atoms/Heading.jsx';

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

    const application = ReactDOMServer.renderToString(<Heading>Jacob Clark</Heading>);

    app.get('/', (req, res) => res.send(template(application)));
    
    return app;
};