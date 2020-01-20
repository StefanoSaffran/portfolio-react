import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import About from '~/pages/About';

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default Routes;
