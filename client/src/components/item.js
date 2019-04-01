import React from 'react';

const FridgeItem = (props) => {
    return (
        <div className="container row">
            <div className="fridgeItem">
                <br></br>
                <h1 className="mt-3">Am I doing this right?: {props.myText}</h1>
            </div>
        </div>
    )
}

export default FridgeItem;