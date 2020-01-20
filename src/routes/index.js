import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import About from '~/pages/About';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default Routes;
