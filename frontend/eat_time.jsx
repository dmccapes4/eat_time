import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {
  requestSignup,
  requestLogin,
  requestLogout
} from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let preloadedState = undefined;
  if(window.user) {
    preloadedState = {
      session: {
        user: window.user
      }
    };
  }
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store} />, root);
});
