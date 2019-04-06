import React, { Component } from 'react';
import Signup from './Signup';

class Modal extends Component {
    
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
        let className = 'element';
        if (this.props.isShowing) {
            className += ' element-hide';
        } else {
            className = 'open-modal-btn add-icon'
        }
    return (
        <div className="modal-app">
            <div className="componentWrapper">
                { this.state.isShowing ?
                <div onClick={this.closeModalHandler} className="back-drop">
                </div> : null }
                  <button className={className} onClick={this.openModalHandler}>
                  <i className="fas fa-plus-square"></i>
                  </button>
                </div>
  
                <Signup className="modal"
                    show={this.state.isShowing}
                    close={this.closeModalHandler}>
                    {/* <FormContainer/> */}
                </Signup>
        </div>
    )}
}

export default Modal;