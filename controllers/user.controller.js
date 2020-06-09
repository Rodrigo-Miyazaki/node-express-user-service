const User = require("../models/user.model");

// eslint-disable-next-line consistent-return
var save = function (req, res, next) {
    // eslint-disable-next-line prefer-destructuring
    const body = req.body;
    if (!body) {
        res.statusMessage = "Body is undefined";

        // eslint-disable-next-line no-magic-numbers
        return res.status(400).end();
    }
    if (!body.name) {
        res.statusMessage = "Name is required";

        return res.status(400).end();
    }
    User.create(body, function (err, user) {
        if (err){
            return next(err);
        }

        return res.json(user);
    });
};


var findAll = function (req, res, next) {
    User.find(function (err, users) {
        if (err) {
            return next(err);
        }

        return res.json(users);
    });
};

module.exports = { findAll, save };