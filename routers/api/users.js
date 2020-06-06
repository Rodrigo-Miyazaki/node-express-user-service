var mongoose = require('mongoose');
var router = require('express').Router();
var User = require('../../models/user.model');


router.get('/users', function(req, res, next){
    User.find().then(function(user){
        if(!user){ return res.sendStatus(401); }
        return res.json(user);
    }).catch(next)
});

router.put('/users', function(req, res, next){

});

router.post('/users', function(req, res, next){
    let body = req.body;
    User.create(body).then(function(user){
        if(!user){ return res.sendStatus(401); }
        return res.json(user);
    }).catch(next)
});

module.exports = router;