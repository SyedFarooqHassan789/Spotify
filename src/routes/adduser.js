var User = require("../model/user");
var mongoose = require("mongoose");

module.exports = function adduser(req, res, next) {


    var newUser = User({
        username: req.body.username.value,
        email: req.body.email.value,
        password: req.body.password.value,
        gender: req.body.gender.value
    });
    newUser.save(function (err) {
        if (err) throw err;

        console.log("User created!");
        var URL = req.header("origin") + "/spotify" || '/';
        res.json({redir: URL});
    });
}
