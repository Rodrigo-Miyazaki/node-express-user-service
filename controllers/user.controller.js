"use strict";

var UserController = function(User){

	var UserObj = {};
    console.log('UserController')
	UserObj.save = function(req, res, next){
        console.log('save')
		var newUser = new User(req.body);
		newUser.save(function(err, user){
			if(err){
				res.json({status: false, error: err.message});
				return;
			}
			res.json({status: true, user: user});
		});
	}

	UserObj.findAll = function(req, res, next){
        console.log('findAll')
		User.find(function(err, users){
			if(err) {
				res.json({status: false, error: "Something went wrong"});
				return
			}
			res.json({status: true, users: users});
		});
	}

	UserObj.update = function(req, res, next){
		var completed = req.body.completed;
		User.findById(req.params.todo_id, function(err, user){
			user.completed = completed;
			user.save(function(err, user){
				if(err) {
					res.json({status: false, error: "Status not updated"});
				}
				res.json({status: true, message: "Status updated successfully"});
			});
		});
	}

	UserObj.delete = function(req, res, next){
		User.remove({_id : req.params.todo_id }, function(err, todos){
			if(err) {
				res.json({status: false, error: "Deleting user is not successfull"});
			}
			res.json({status: true, message: "User deleted successfully"});
		});
	}

	return UserObj;
}

module.exports = UserController;