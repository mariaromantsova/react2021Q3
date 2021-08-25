import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import store from './redux/store';
import renderApp from './renderApp';

hydrate(
  <React.StrictMode>
    <Provider store={store}>
      <Router>{renderApp()}</Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
