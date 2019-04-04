import React, { Component } from "react";

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
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      },

    };
    // this.handleTextArea = this.handleTextArea.bind(this);
    // this.handleAge = this.handleAge.bind(this);
    // this.handleFullName = this.handleFullName.bind(this);
    // this.handleFormSubmit = this.handleFormSubmit.bind(this);
    // this.handleClearForm = this.handleClearForm.bind(this);
    // this.handleInput = this.handleInput.bind(this);
  }

  /* This lifecycle hook gets executed when the component mounts */

  handleFullName = (e) => {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          name: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleAge =(e) => {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          age: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleInput = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          [name]: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }

  handleTextArea =(e) => {
    console.log("Inside handleTextArea");
    let value = e.target.value;
    this.setState(
      prevState => ({
        newUser: {
          ...prevState.newUser,
          about: value
        }
      }),
      () => console.log(this.state.newUser)
    );
  }



  handleFormSubmit = (e) => {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch("http://example.com", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response => {
      response.json().then(data => {
        console.log("Successful" + data);
      });
    });
  }

  handleClearForm= (e) => {
    e.preventDefault();
    this.setState({
      newUser: {
        name: "",
        age: "",
        gender: "",
        skills: [],
        about: ""
      }
    });
  }

  render() {
    return (
      <div className="container-fluid" onSubmit={this.handleFormSubmit}>
        <form>
  <div className="form-group">
    <label htmlFor="food_name">Food Name</label>
    <select className="food_name" id="food_name">
                    <option>Milk</option>
                    <option>Butter</option>
                    <option>Cream</option>
                    <option>Cheese</option>
                    <option>Sour Cream</option>
                    <option>Yogurt</option>
                    <option> Apple</option>
                    <option>Orange</option>
                    <option>Grapes</option>
                    <option>Banana</option>
                    <option>Melons</option>
                    <option>Bread</option>
                    <option>Ground Meat</option>
                    <option>Lunch Meat</option>
                    <option>Steaks</option>
                    <option>Roasts</option>
                    <option>Hot Dogs</option>
                    <option>Bacon</option>
                    <option>Sausage</option>
                    <option>Eggs</option>
                    <option>Poltry</option>
                    <option>Potatos</option>
                    <option>Carrots</option>
                    <option>Radish</option>
                    <option>Fish</option>
                    <option>Smoked fish</option>
                    <option>Shellfish</option>
                    <option>Herbs (fresh)</option>
                    <option>Asparagus</option>
                    <option>Corn</option>
                    <option>Cabbage</option>
                    <option>Celery</option>
                    <option>Lettuce</option>
                    <option>Peppers</option>
                    <option>Squash</option>
                    <option>Mushrooms</option>
                    <option>Tomatoes</option>
                    <option>Broccoli</option>
                    <option>Spinach</option>
    </select>
  </div>
  <div className="form-group">
    <label htmlFor="category">Category</label>
    <select className="category" id="category">
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
    <select className="ex_date" id="ex_date">
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

