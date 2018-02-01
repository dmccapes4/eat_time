import React from 'react';
import MainContainer from './main/main_container';
import BodyContainer from './body/body_container';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import {
  AuthRoute,
  ProtectedRoute
} from '../utils/route_utils';

export default () => (
  <section>
    <Switch>
      <Route path="/home" component={BodyContainer} />
      <Route path="/" component={MainContainer} />
    </Switch>
  </section>
);
