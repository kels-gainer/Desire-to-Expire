import React, { Component } from "react";
import API from '../../utils/API';

/* Import Components */
//import Input from "../Input";
// import TextArea from "../components/TextArea";
import Button from "../Buttons";
//import Form from "../Form";
//import Dropdown from "../Dropdown"

class FormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowing: this.props.isShowing,
      newItem: {
        user_email: "joe@blah.com",
        name: "",
        category: "",
        ex_date: 0
      },

    };
    // this.handleTextArea = this.handleTextArea.bind(this);
     this.handleFormSubmit = this.handleFormSubmit.bind(this);
     this.handleClearForm = this.handleClearForm.bind(this);
     this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */


  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newItem: {
          ...prevState.newItem,
          [name]: value
        }
      }),
      () => console.log(this.state.newItem)
    );
  }

  handleTextArea =(e) => {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newItem: {
          ...prevState.newItem,
          about: value
        }
      }),
      () => console.log(this.state.newItem)
    );
  }



  handleFormSubmit = (e) => {
    e.preventDefault();
    // this.setState = {
    //   newItem: {
    //     name: "",
    //     category: "",
    //     ex_date: 0
    //   }
    // }
    let userData = this.state.newItem;
    console.log(userData);

    API.saveUserItem(userData).then( function(res) {
        //res.json()
        console.log("Successful" + res.body);
    });
  }

  handleClearForm= (e) => {
    e.preventDefault();
    this.setState({
      newItem: {
        user_email: "joe@blah.com",
        name: "",
        category: "",
        ex_date: 0
      },
    });
  }

  render() {
    //const newItem = this.state.newItem;
    return (
      <div className="container-fluid" onSubmit={this.handleFormSubmit}>
        <form>
  <div className="form-group">
    <label htmlFor="food_name">Food Name</label>
    <input className="food_name" id="name" name="name" onChange={(e) => this.handleInput(e)}>
                    
    </input>
  </div>
  <div className="form-group">
    <label htmlFor="category">Category</label>
    <select className="category" id="category" name="category" onChange={(e) => this.handleInput(e)}>
            <option>Dairy</option>
            <option>Fruit</option>
            <option>Grains</option>
            <option>Meat</option>
            <option>Root Veggies</option>
            <option>Seafood</option>
            <option>Veggies</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="ex_date">Expiration</label>
    <select className="ex_date" id="ex_date" namne="ex_date" onChange={(e) => this.handleInput(e)}>
                    <option>2</option>
                    <option>3</option>
                    <option>7</option>
                    <option>10</option>
                    <option>14</option>
                    <option>21</option>
                    <option>30</option>
                    <option>35</option>
                    <option>60</option>
    </select>
  </div>
</form>
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Submit"}
          style={buttonStyle}
        />{" "}
        {/*Submit */}
        <Button
          action={this.handleClearForm}
          type={"secondary"}
          title={"Clear"}
          style={buttonStyle}
        />{" "}
        {/* Clear the form */}
      </div>
    );
  }
}

const buttonStyle = {
  margin: "10px 10px 10px 10px"
};

export default FormContainer;

