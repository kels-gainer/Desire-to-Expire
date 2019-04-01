const db = require("../models");

module.exports = function(app) {
    app.get("/api/dates", function(req, res) {
        db.Food.findAll({
            include: [db.UserItems]
        }).then(function(dbFood) {
            res.json(dbFood);
        });
    });

    app.get("/api/category", function(req, res) {
        db.Food.findAll({
            attributes: [category],
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
};