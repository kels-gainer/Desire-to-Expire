import React from 'react';

const BodyContainer = (props) => {
    return (
        <div className="bodyContainer container sm-col-5">
            <div className="bodyContent container">
                <br></br>
                <h1 className="mt-3">Body content goes here: {props.myText}</h1>
            </div>
        </div>
    )
}

export default BodyContainer;