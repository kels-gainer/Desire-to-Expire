import React, { Component } from 'react';
import './css/App.css';

import {Route, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import NavBar from './components/NavBar';
import BodyContainer from './components/BodyContainer';
//import Modal from './components/Signup'
import Callback from './Callback';
import SecuredRoute from './components/SecuredRoute';
import './css/listView.css';

             // Trying to use portal for modal
// import ReactDOM from "react-dom";
// import Portal from './portal';
// ReactDOM.render(<App />, document.getElementById("root"));

class App extends Component {
  async componentDidMount() {
    if (this.props.location.pathname === '/callback') return;
    try {
      await auth0Client.silentAuth();
      this.forceUpdate();
      this.setState({
        auth: auth0Client.isAuthenticated(),
        email: auth0Client.getProfile().name
      });
      
    } catch (err) {
      if (err.error !== 'login_required') console.log(err.error);
    }
  }

  componentDidUpdate(prev) {
    if (this.state.auth !== auth0Client.isAuthenticated()) {
      this.setState({
        auth: auth0Client.isAuthenticated(),
        email: auth0Client.getProfile().name
      });
    }
  }
  
     constructor() {
        super();

        this.state = {
            isShowing: false,
            auth: false,
            email: ""
            
        }
    }

    // openModalHandler = () => {
    //     this.setState({
    //         isShowing: true
    //     });
    // }

    // closeModalHandler = () => {
    //     this.setState({
    //         isShowing: false
    //     });
    // }
  
  render() {
    return (
      <div className="App">
        <NavBar 
          auth={this.state.auth}
        >
        </NavBar>
        <Route exact path='/callback' component={Callback}/>
        <br></br>
        
                <BodyContainer email={this.state.email} auth={this.state.auth}/>
         {/* </div> */}

        <SecuredRoute path='/new-question' />
      
      
      </div>
    );
  }
} 


export default withRouter(App);