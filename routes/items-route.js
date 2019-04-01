var db = require("../models");

module.exports = function(app) {
    // get all date ids 
    app.get("/api/userItems", function(req, res) {
        var query = {};
        if (req.query.db.dates_id) {
            query.DatesId = req.query.dates_id;
        }

        db.Items.findAll({
            where:query,
            include: [db.dates]
        }).then(function(dbItems) {
            res.json(dbItems)
            });
        });

        // get one date id
    app.get("/api/userItems/:id", function(req, res) {
        db.Items.findOne({
            where: {
                id: req.parms.id
            },
            include: [db.Dates]
        }).then(function(dbItems) {
            res.json(dbItems);
        });
    });

    // Post new items
    app.post("/api/userItems", function(req, res) {
        db.Items.create(req.body).then(function(dbItems) {
            res.json(dbItems);
        });
    });

    // delete items
    app.delete("/api/userItems/:id", function(req, res) {
        db.Items.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbItems) {
            res.json(dbItems);
        });
    });

    // Update items
    app.put("/api/userItems", function(req, res) {
        db.Items.update(req.body, {
            where: {
                id: req.body.id
            }
        }).then(function(dbItems) {
            res.json(dbItems);
        });
    });
};