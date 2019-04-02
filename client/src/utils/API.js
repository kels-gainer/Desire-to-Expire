import axios from "axios";

export default {
  // GET ALL ITEMS BY USER (ie EMAIL)
  getUserItems: email => { axios.get(`/api/${email}`); },
  // GET ONE USER ITEM BY ID
  getUserItem: id => { axios.get(`/api/userItems/${id}`); },
  // DELETE USER ITEM WITH THE GIVEN ID
  deleteUserItem: id => { axios.delete(`/api/userItems/${id}`); },
  // UPDATE USER ITEM
  updateUserItem: (id, body) => { axios.put(`/api/userItems/${id}`, body); },
  // POST NEW USER ITEM
  saveUserItem: () => { axios.post("/api/userItems/"); },
  //*** FOOD REFERENCE
  // GET ALL FOOD ITEMS
  getFood: () => { axios.get("/api/food/"); },
  // GET FOOD ITEM BY ID
  getFoodItem: id => { axios.get(`/api/food/${id}`); },
  // GET EX_DATE FROM FOOD_NAME
  getFoodEx: foodName => { axios.get(`/api/ex/${foodName}`); },
  //*** CATEGORY LISTS
  // LIST NAMES OF ALL CATEGORIES
  //Returns a list of the unique Catagory options for value list
  getCategory: () => { axios.get("/api/category-list"); },
  // LIST NAMES OF ALL FOOD BY CATEGORY
  //Returns a list of all food items by specified catagory
  getSubcategory: catagory => { axios.get(`/api/category-list/${catagory}`); }
};