import React from 'react';
import FormContainer from '../Container'
import './style.css';

const modal = (props) => {
    
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

export default modal;