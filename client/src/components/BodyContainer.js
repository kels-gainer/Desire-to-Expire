import React from 'react';
import FridgeItem from './item';
import auth0Client from '../Auth';

const BodyContainer = (props) => {
    const email = auth0Client.isAuthenticated() && auth0Client.getProfile().name;
    console.log(email);

    return (
        <div className="bodyContainer container sm-col-5">
            <div className="bodyContent container">
                <br></br>
                <h1 className="mt-3">Body content goes here: {props.myText}</h1>
                <h3>{email}</h3>
                <FridgeItem />
            </div>
        </div>
    )
}

export default BodyContainer;