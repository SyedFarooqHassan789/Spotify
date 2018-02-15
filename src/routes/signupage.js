var fs = require("fs");
var path = require("path");
var React = require("react");

module.exports = function load_jade(req, res, next) {
    fs.exists(__dirname + "/../../views/" + "signupage" + ".html", function (exists) {
        if (exists) {
            res.sendFile(path.resolve(__dirname, "../../views/", "signupage.html"));
        } else {
            res.status(404);
            res.send("** Page Not Found **");
        }
    });
}


