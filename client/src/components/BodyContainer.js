import React from 'react';
import FridgeItem from './item';
//import Modal from './Signup';
//import auth0Client from '../Auth';


const BodyContainer = (props) => {
    //const email = auth0Client.isAuthenticated() && auth0Client.getProfile().name;
    //console.log(email);

    return (
        <div className="bodyContainer container sm-col-5">
            <div className="bodyContent">
                
                <div className="row row-header">
                    <h1>Header</h1>
                </div>

                <div className="row">
                    <FridgeItem email={props.email} auth={props.auth}/>
                </div>
            
            </div>
        </div>
    )
}

export default BodyContainer;