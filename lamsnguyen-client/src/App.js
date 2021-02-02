import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import logo from './logo.svg';
import './App.css';

import HomePage from "./pages/HomePage";

class App extends Component {
  render() {
    const vh = window.innerHeight;
    const vw = window.innerWidth;

    const height = `${vh}px`;

    return (
      <div className="Client" style={{ height, maxHeight: height }}>
        <Router>
          <Switch>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
