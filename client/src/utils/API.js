import axios from "axios";

export default {
  // GET ALL ITEMS BY USER (ie EMAIL)
  getUserItems: function (email) {
    return axios.get("/api/" + email);
  },
  // GET ONE USER ITEM BY ID
  getUserItem: function (id) {
    return axios.get(`/api/userItems/${id}`);
  },
  // DELETE USER ITEM WITH THE GIVEN ID
  deleteUserItem: function (id) {
    return axios.delete(`/api/userItems/${id}`); },
  // UPDATE USER ITEM
  updateUserItem: function (id, body) {
    return axios.put(`/api/userItems/${id}`, body); },
  // POST NEW USER ITEM
  saveUserItem: function(body) { 
    return axios.post("/api/userItems/", body); },
  //*** FOOD REFERENCE
  // GET ALL FOOD ITEMS
  getFood: function() {
    return axios.get("/api/food/"); },
  // GET FOOD ITEM BY ID
  getFoodItem: function (id) {
    return axios.get(`/api/food/${id}`); },
  // GET EX_DATE FROM FOOD_NAME
  getFoodEx: function (foodName) {
    return axios.get(`/api/ex/${foodName}`); },
  //*** CATEGORY LISTS
  // LIST NAMES OF ALL CATEGORIES
  //Returns a list of the unique Catagory options for value list
  getCategory: function() {
    return axios.get("/api/category-list"); },
  // LIST NAMES OF ALL FOOD BY CATEGORY
  //Returns a list of all food items by specified catagory
  getSubcategory: function (catagory) {
    return axios.get(`/api/category-list/${catagory}`); }
};