import { BrowserRouter } from 'react-router-dom';

import '../assets/spotify_icon.png';
import '../stylesheets/styles.scss';

import React from 'react';
import { render } from 'react-dom';

import App from './app.jsx';

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));
