// DEPENDENCIES
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    console.log("Getting burger data...")
    burger.all(function(data) {
        var burgersData = {
        burgers: data
    };
    console.log(burgersData);
    res.render("index", burgersData);
    });
});

// Export routes for server.js to use.
module.exports = router;