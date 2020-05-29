import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home' 
import Dataset from './Dataset'
import Data from './Data'

export const App = () =>
  <Router basename={`${process.env.PUBLIC_URL}/`}>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      {/* <Route path="/:state" component={Home} /> */}
      <Route path="/info/:state/:dataset" component={Dataset} />
      <Route path="/data/:state/:dataset" component={Data} />
    </Switch>
  </Router>


