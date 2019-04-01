const db = require("../models");

module.exports = function(app) {
    // get all date ids 
    app.get("/api/userItems", function(req, res) {
        var query = {};
        if (req.query.db) {
            query.id = req.query.id;
        }

        db.UserItems.findAll({
            where:query,
            include: [db.Food]
        }).then(function(dbItems) {
            res.json(dbItems)
            });
        });

        // get one date id
    app.get("/api/userItems/:id", function(req, res) {
        db.UserItems.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Food]
        }).then(function(dbFood) {
            res.json(dbFood);
        });
    });

    // Post new items
    app.post("/api/userItems", function(req, res) {
        db.UserItems.create(req.body).then(function(dbItems) {
            res.json(dbItems);
        });
    });

    // delete items
    app.delete("/api/userItems/:id", function(req, res) {
        db.UserItems.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbItems) {
            res.json(dbItems);
        });
    });

    // Update items
    app.put("/api/userItems", function(req, res) {
        db.UserItems.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbItems) {
            res.json(dbItems);
        });
    });
};