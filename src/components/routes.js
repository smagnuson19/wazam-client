import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../containers/welcome';
import Home from '../containers/home';


const FallBack = (props) => {
  return <div>URL Not Found</div>;
};

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/home" component={Home} />
      <Route component={FallBack} />
    </Switch>
  );
};

export default Routes;
