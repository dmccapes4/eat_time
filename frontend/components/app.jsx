import React from 'react';
import SplashContainer from './splash/splash_container';
import BodyContainer from './body/body_container';
import { Route, HashRouter } from 'react-router-dom';
import { Switch } from 'react-router';
import {
  AuthRoute,
  ProtectedRoute
} from '../utils/route_utils';

export default () => (
  <section>
    <Switch>
      <Route path="/restaurant/:restaurantId" component={BodyContainer} />
      <Route path="/home" component={BodyContainer} />
      <Route path="/" component={SplashContainer} />
    </Switch>
  </section>
);
