import express from 'express';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

import HelloWorld from './src/HelloWorld.jsx';

const app = express();
const port = 3000;

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));