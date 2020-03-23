import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home.js' 
import Dataset from './Dataset.js'

export const App = () =>
  <Router basename={`${process.env.PUBLIC_URL}/`}>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      {/* <Route path="/:state" component={Home} /> */}
      <Route path="/info/:state/:dataset" component={Dataset} />
    </Switch>
  </Router>


