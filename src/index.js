import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './utilities/registerServiceWorker';
import App from './App';

import './components/Map/styles.css';
import 'leaflet/dist/leaflet.css';

render(
    <Router>
        <Route path="/" component={App} />
    </Router>,
    document.getElementById('app')
);

registerServiceWorker();
