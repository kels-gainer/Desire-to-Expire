import React, { Component } from 'react';
import {Route, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import NavBar from './components/NavBar';
import BodyContainer from './components/BodyContainer';
import Callback from './Callback';
import SecuredRoute from './components/SecuredRoute';
import FridgeItem from './components/item';

class App extends Component {
  async componentDidMount() {
  if (this.props.location.pathname === '/callback') return;
  try {
    await auth0Client.silentAuth();
    this.forceUpdate();
  } catch (err) {
    if (err.error !== 'login_required') console.log(err.error);
  }
}

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <Route exact path='/callback' component={Callback}/>
        
        <BodyContainer myText="test">
          <h1>This doesn't load...</h1>
        </BodyContainer>
        <FridgeItem />

        <SecuredRoute path='/new-question'>
          <h1>You are now logged in</h1>
        </SecuredRoute>
      </div>
    );
  }
}

export default withRouter(App);