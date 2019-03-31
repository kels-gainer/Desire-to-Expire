const db = require("../models");
const sequelize = require("sequelize");

module.exports = function(app) {
    app.get("/api/dates", function(req, res) {
        db.Food.findAll({
            include: [db.UserItems]
        }).then(function(dbFood) {
            res.json(dbFood);
        });
    });

    app.get("/api/dates/:id", function(req, res) {
        db.Food.findOne({
            where: {
                id: req.params.id
            },
            include: [db.UserItems]
        }).then(function(dbFood) {
            res.json(dbFood);
        });
    });

    //Categories
    app.get("/api/category", function(req, res) {
        db.sequelize.query("SELECT DISTINCT category FROM `Food`", {type: sequelize.QueryTypes.SELECT})
        .then(dbFood => {
            res.json(dbFood);
        })
    });

    app.get("/api/category/:category", function(req, res) {
        // db.sequelize.query("SELECT food_name FROM `Food` WHERE category = ?", {type: sequelize.QueryTypes.SELECT})
        // .then(dbFood => {
        //     res.json(dbFood);
        // })
        db.Food.findAll({
            where: {
                category: req.params.category
            }
        }).then(function(dbFood) {
            res.json(dbFood);
        });
    });

};