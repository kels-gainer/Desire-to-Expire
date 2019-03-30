import React from 'react';

const BodyContainer = (props) => {
    return (
        <div className="bodyContainer">
            <h1>Body content goes here: {props.myText}</h1>
        </div>
    )
}

export default BodyContainer;