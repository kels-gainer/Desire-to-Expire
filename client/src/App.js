import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from "./views/login"
import UserItems from "./views/userItems"
import UserInfo from "./views/userInfo"
import NoMatch from "./views/noMatch"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={ Login }/>
            <Route path='/userItems' exact component={ UserItems }/>
            <Route path='/userInfo' exact component={ UserInfo }/>
            <Route component={ NoMatch } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
