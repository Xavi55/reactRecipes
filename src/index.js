import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./components/Router";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Router basename={process.env.PUBLIC_URL}/>, document.getElementById('root'));
registerServiceWorker();
