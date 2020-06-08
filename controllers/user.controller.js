"use strict";
const User = require('../models/user.model')

function save(req, res, next) {
    let body = req.body;
    if (!body) {
        res.statusMessage = "Body is undefined";
        return res.status(400).end();
    };
    if (!body.name) {
        res.statusMessage = "Name is required";
        return res.status(400).end();
    };
    User.create(body, function (err, user) {
        if (err) next(err);
        return res.json(user);
    })
}


function findAll(req, res, next){
    User.find(function(err,users){
        if(err) next(err);
        res.json(users);
    })
}

module.exports = { save, findAll }