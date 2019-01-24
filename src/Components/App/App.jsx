import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as routes from '../../Constants/routes';

import Home from '../Home/Home';
import History from '../History/History';
import Navigation from '../Navigation/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <Route
            exact
            path={routes.HOME}
            component={() => <Home />}
          />
          <Route
            exact
            path={routes.HISTORY}
            component={() => <History />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
