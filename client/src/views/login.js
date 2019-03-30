import React, { Component } from "react";



class Login extends Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return(
            <h1 data-location={this.props.location.pathname}>Desire to Expire Login</h1>
        );
    }
}

export default Login;