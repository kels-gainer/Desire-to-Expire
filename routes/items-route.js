var db = require("../models");

module.exports = function(app) {
    // GET ALL USER ITEMS
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

    // GET ONE USER ITEM BY ID
    app.get("/api/userItems/:id", function(req, res) {
        db.UserItems.findOne({
            where: {
                id: req.params.id
            },
                include: [db.Food]
        }).then(function(dbItems) {
            res.json(dbItems);
        });
    });

    // GET ALL ITEMS BY USER (ie EMAIL)
    app.get("/api/:email", function(req, res) {
        db.UserItems.findAll({
            where: {
                user_email: req.params.email
            },
                include: [db.Food]
        }).then(function(dbItems) {
            res.json(dbItems);
        });
    });

    // POST NEW USER ITEMS
    //Sample POST BODY JSON object example
    // {
    //     "user_email": "smith@blah.com",
    //     "name": "Chicken",
    //     "category": "Meat",
    //     "ex_date": 5
    // }
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
    app.put("/api/userItems/:id", function(req, res) {
        db.UserItems.update(req.body, {
            where: {
                id: req.params.id
            }
        }).then(function(dbItems) {
            res.json(dbItems);
        }).catch(err => {
            res.send(err)
        });
    });
};