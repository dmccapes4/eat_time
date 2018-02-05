import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from './app';
import PageTransition from 'react-router-page-transition';

export default ({ store }) => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
