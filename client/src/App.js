import React, { Component } from 'react';
import Modal from './components/Signup'

import './css/App.css';
import FormContainer from './components/Container';

import {Route, withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import NavBar from './components/NavBar';
import BodyContainer from './components/BodyContainer';
import Callback from './Callback';
import SecuredRoute from './components/SecuredRoute';
import './css/listView.css';

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
  
     constructor() {
        super();

        this.state = {
            isShowing: false
        }
    }

    openModalHandler = () => {
        this.setState({
            isShowing: true
        });
    }

    closeModalHandler = () => {
        this.setState({
            isShowing: false
        });
    }
  
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>
        <Route exact path='/callback' component={Callback}/>
        
        <BodyContainer myText="test" />
      
        <div className="row">
        <div className="column">
                { this.state.isShowing ?
                <div onClick={this.closeModalHandler} className="back-drop">
                </div> : null }
                  <button className="open-modal-btn" style={{zIndex: 100}} onClick={this.openModalHandler}>
                    Add Food
                  </button>
                </div>
            <div className="column">
                <Modal className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                    {/* <FormContainer/> */}
                </Modal>
            </div>
         </div>

        <SecuredRoute path='/new-question' />
      
      
      </div>
    );
  }
} 


export default withRouter(App);