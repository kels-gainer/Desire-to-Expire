var db = require("../models");

module.exports = function(app) {
    app.get("/api/userInfo", function(req, res) {
        db.Info.findAll({
            include: [db.Info]
        }).then(function(dbInfo) {
            res.json(dbInfo);
        });
    });

    app.get("/api/userInfo/:id", function(req, res) {
        db.Info.findOne({
            where: {
                id: req.params.id
            },
        }).then(function(dbInfo) {
            res.json(dbInfo);
        });
    });
};