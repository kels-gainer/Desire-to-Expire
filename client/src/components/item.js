import React, { Component } from 'react';
import API from '../utils/API';
//import auth0Client from '../Auth';
//import axios from 'axios';
// import Form from 'react-bootstrap/Form'
// import Modal from 'react-bootstrap/Modal'

//auth0Client.isAuthenticated() && auth0Client.getProfile().name
//const email = "joe@blah.com"

class FridgeItem extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      email: "joe@blah.com",
      auth: false,
      userItems: [],
      food_name: "",
      ex_date: ""
    }
  }
    
      componentDidMount() {
        //console.log(this.state)
        //this.setState({email: this.props.email})
        if (this.props) {
          console.log(this.props)
          // this.setState({
          //   email: this.props.email,
          //   auth: this.props.auth
          // })
          this.loadItems(this.state.email);
        }

      }

      loadItems = (email) => {
        API.getUserItems(email)
          .then(res => {
            this.setState({ userItems: res.data})
            console.log(res.data)
          })
          .catch(err => console.log(err));
      };

      deleteItem = () => {
        let id = this.id;
        let email = this.state.email;
        console.log("id: " +id +" email: " +email);
        API.deleteUserItem(id)
          .then(res => this.loadItems(email))
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.author) {
          API.saveBook({
            title: this.state.title,
            author: this.state.author,
            synopsis: this.state.synopsis
          })
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
        }
      };
    
    render() {
      let className = 'element';
        if (this.props.isShowing) {
            className += ' element-hide';
        } else {
            className = 'list-view'
        }
    return (
        <div className={className}>
        
            <ul className="list-group list-group-flush">
                {
                  this.state.userItems.map((item, i) =>
                    <li className="list-group-item" key={i}>
                    <button className="icon-left"><i className="fas fa-edit"></i></button>
                    <span className="li-text">{item.name}</span>
                    <button className="icon-right" id={item.id} onClick={this.deleteItem}><i className="fas fa-trash-alt"></i></button>
                    </li>
                  )
                }
                {/* <li className="list-group-item">Cras justo odio</li> */}
            </ul>
        </div>
    )}
}

export default FridgeItem;