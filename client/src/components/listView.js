import React from "react"
import './listView.css';
import fridgeItem from "item.js"

//connect the routes 
//axios to connect 
// display on the server terminal


React.createElement("div",

{className: "list-view"}, 

React.createElement("h1", null, "Shopping List for ", props.name), 
React.createElement("ul", null, React.createElement("li", null, "Item Name:", food_name, " "), 
React.createElement("li", null, " ", ex_dates, " days till expiration "), 
React.createElement("li", null, " Information:", category, " ")), 

React.createElement("button", null, "Edit"), 
React.createElement("button", null, "Delete"));

ReactDOM.render(<item.js />, document.getElementById("root"));
ReactDOM.render(element, document.getElementById('root'));


export default listView;