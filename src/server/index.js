import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

import Heading from '../components/atoms/Heading.jsx';

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

export default app;