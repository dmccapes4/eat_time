import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignupContainer from './session/signup_container';
import LoginContainer from './session/login_container';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import {
  AuthRoute,
  ProtectedRoute
} from '../utils/route_utils';

export default () => (
  <section>
    <Switch>
      <AuthRoute path="/signup" component={SignupContainer} />
      <AuthRoute path="/login" component={LoginContainer} />
      <Route path="/" component={NavBarContainer} />
    </Switch>
  </section>
);
