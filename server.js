/* eslint-disable no-undef */
var express = require("express");
var mongoose = require("mongoose");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var config = require("./config/config");
var cors = require("cors");
var app = express();


app.use(morgan("dev"));                                         // log every request to the console
app.use(cors());
app.use(bodyParser.urlencoded({ "extended": "true" }));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: "application/vnd.api+json" })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.use(require("./routers"));


if (process.env.NODE_ENV === "test") {
	mongoose.connect(config.test_db);
	app.listen(config.test_port, function (err) {
		if (err){
			throw err;
		}
	});
} else {
	mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });
	app.listen(config.port, function (err) {
		if (err){
			throw err;
		}
	});
}


module.exports = app;