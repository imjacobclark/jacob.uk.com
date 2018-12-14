import App from '../components/App.jsx';

import React from 'react';
import {hydrate} from 'react-dom';

hydrate(
    <App runtime="client" />,
    document.getElementById('jacobclarkxyz__main')
);