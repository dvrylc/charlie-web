// External imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// Internal imports
import App from './components/App';
import './style.css';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

//import registerServiceWorker from './registerServiceWorker';
//registerServiceWorker();
