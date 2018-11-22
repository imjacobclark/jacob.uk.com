import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

import HelloWorld from '../HelloWorld.jsx';

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

const application = ReactDOMServer.renderToString(<HelloWorld />);

app.get('/', (req, res) => res.send(template(application)));

export default app;