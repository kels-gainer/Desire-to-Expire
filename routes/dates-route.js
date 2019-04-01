var db = require("../models");

module.exports = function(app) {
    app.get("/api/dates", function(req, res) {
        db.dates.findAll({
            include: [db.Dates]
        }).then(function(dbDates) {
            res.json(dbDates);
        });
    });

    app.get("/api/dates/ :id", function(req, res) {
        db.Dates.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Dates]
        }).then(function(dbDates) {
            res.json(dbDates);
        });
    });
};