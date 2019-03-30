import React, { Component } from "react";
import UserItemsList from "../components/userItemsList"

class UserItems extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return(
            <div>
                <h1 data-location={this.props.location.pathname}>Desire to Expire User Items</h1>
                <UserItemsList/>
            </div>
        );
    }
}

export default UserItems;