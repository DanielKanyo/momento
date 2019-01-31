import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import * as routes from '../../Constants/routes';

import Home from '../Home/Home';
import History from '../History/History';
import About from '../About/About';
import Momento from '../OurProducts/Momento';
import Coffino from '../OurProducts/Coffino';
import PrivateLables from '../OurProducts/PrivateLables';
import WhyMomento from '../WhyMomento/WhyMomento';
import Contact from '../Contact/Contact';
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
          <Route
            exact
            path={routes.ABOUTUS}
            component={() => <About />}
          />
          <Route
            exact
            path={routes.MOMENTO}
            component={() => <Momento />}
          />
          <Route
            exact
            path={routes.COFFINO}
            component={() => <Coffino />}
          />
          <Route
            exact
            path={routes.PRIVATELABLES}
            component={() => <PrivateLables />}
          />
          <Route
            exact
            path={routes.WHYMOMENTO}
            component={() => <WhyMomento />}
          />
          <Route
            exact
            path={routes.CONTACT}
            component={() => <Contact />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
