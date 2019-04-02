import React, { Component } from 'react';
import Modal from './components/Signup'

import logo from './logo.svg';
import './App.css';
import FormContainer from './components/Container';

class App extends Component {

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
        <header className="App-header">
          <div className="callout-basics-example">
          <div className="row">
            <div className="column">
                { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }
                <button className="open-modal-btn" style={{zIndex: 100}} onClick={this.openModalHandler}>Add Food</button>
                </div>
            <div className="column">
                <Modal
                    className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                    {/* <FormContainer/> */}
                </Modal>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
} 


export default App;
