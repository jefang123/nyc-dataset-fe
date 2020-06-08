import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from './containers/home' 
import Dataset from './Dataset'
import Data from './Data'

export const App = ({store}) =>
  <Provider store={store}>
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        {/* <Route path="/:state" component={Home} /> */}
        <Route path="/info/:state/:dataset" component={Dataset} />
        <Route path="/data/:state/:dataset" component={Data} />
      </Switch>
    </Router>
  </Provider>