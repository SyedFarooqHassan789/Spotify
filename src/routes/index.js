var express = require("express"),
    path = require("path");
var router = express.Router();
module.exports.routes = router;


router.get("/spotify", function (req, res, next) {
    var loadFrontPage = require("./frontpage");
    router.get("/spotify", loadFrontPage);
    next();
});
router.get("/signup", function (req, res, next) {
    var loadSignUpPage = require("./signupage");
    router.get("/signup", loadSignUpPage);
    next();
});

router.get("/mainpage", function (req, res, next) {
    var loadMainpage = require("./mainpage");
    router.get("/mainpage", loadMainpage);
    next();
});

router.post("/spotify", require("./authenticate.js"));
router.post("/signup", require("./adduser.js"));

