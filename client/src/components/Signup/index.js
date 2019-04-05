import React from 'react';
import FormContainer from '../Container'
import './style.css';

const Modal = (props) => {
    
        // this.state = {
        //     body: {
                
        //     }     
        // }

    return (
        <div>
            <div className={`modal-wrapper ${props.show ?  'show' : 'hide'}`}>
                <div className="modal-header">
                    <h3>Add Food</h3>
                    <span className="close-modal-btn" onClick={props.close}>×</span>
                </div>
                <div className="modal-body">
                <FormContainer/>
                </div>
                <div className="modal-footer">
                {/* <FormContainer/> */}
                    <button className="btn-continue" >Save</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;

// import React from "react";
// import "./style.css";
// import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

// export default class FoodModal extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { modal: false };

//         this.toggle = this.toggle.bond(this);
//         this.handleSubmit = this.handleSubmit.bond(this);
//     }

//     toggle() {
//         this.setState(prevState => ({
//             modal: !this.state.modal
//         }));
//     }

//     render() {
//         return (
//             <div>
//                 <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}></Button>
//                 <Modal isOpen={this.stae.modal} toggle={this.toggle} className={this.props.className}>
//                     <ModalBody>
//                         Practice Modal
//                     </ModalBody>
//                     <ModalFooter>
//                         <Button color="primary" onClick={this.toggle}>Add></Button>{' '}
//                         <Button color="secondary" onClick={this.toggle}>Cancel></Button>
//                     </ModalFooter>
//                 </Modal>   
//             </div>
//         );
//     }
// }