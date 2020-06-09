// eslint-disable-next-line new-cap
const router = require("express").Router();
const UserController = require("../../controllers/user.controller");

router.get("/users", UserController.findAll);
router.post("/users", UserController.save);


module.exports = router;