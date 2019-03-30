import React, { Component } from "react";

class UserInfo extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return(
            <h1 data-location={this.props.location.pathname}>Desire to Expire User Info</h1>
        );
    }
}

export default UserInfo;