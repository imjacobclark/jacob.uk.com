import App from '../components/App.jsx';

import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

hydrate(
    <BrowserRouter>
        <App runtime="client" />
    </BrowserRouter>,
    document.getElementById('jacobclarkxyz__main')
);