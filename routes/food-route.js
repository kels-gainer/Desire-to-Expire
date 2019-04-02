const db = require("../models");
const sequelize = require("sequelize");

module.exports = function(app) {
    //*** FOOD REFERENCE
    // GET ALL FOOD ITEMS
    app.get("/api/food", function(req, res) {
        db.Food.findAll({
            include: [db.UserItems]
        }).then(function(dbFood) {
            res.json(dbFood);
        });
    });

    // GET FOOD ITEM BY ID
    app.get("/api/food/:id", function(req, res) {
        db.Food.findOne({
            where: {
                id: req.params.id
            },
            include: [db.UserItems]
        }).then(function(dbFood) {
            res.json(dbFood);
        });
    });

    // GET EX_DATE FROM FOOD_NAME
    app.get("/api/ex/:food_name", function(req, res) {
        db.sequelize.query("SELECT ex_dates FROM `Food` WHERE food_name = ?",
            { replacements: [req.params.food_name], type: sequelize.QueryTypes.SELECT})
            .then(dbFood => {
            res.json(dbFood);
        })
     });

    //*** CATEGORY LISTS
    // LIST NAMES OF ALL CATEGORIES
    //Return a list of the unique Catagory options for value list
    app.get("/api/category-list", function(req, res) {
        db.sequelize.query("SELECT DISTINCT category FROM `Food`", {type: sequelize.QueryTypes.SELECT})
        .then(dbFood => {
            res.json(dbFood);
        })
    });

    // LIST NAMES OF ALL FOOD BY CATEGORY
    //Return a list of all food items by specified catagory
    app.get("/api/category-list/:category", function(req, res) {
        db.sequelize.query("SELECT food_name FROM `Food` WHERE category = ?",
            { replacements: [req.params.category], type: sequelize.QueryTypes.SELECT})
        .then(dbFood => {
            res.json(dbFood);
        })
    });


};