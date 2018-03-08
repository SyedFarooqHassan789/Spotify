var fs = require("fs");
var path = require("path");

var React = require("react");

module.exports = function load_jade(req, res, next) {
    fs.exists(__dirname + "/../../views/" + "frontpage" + ".pug", function (exists) {
        if (exists) {
            res.render(path.resolve(__dirname, "../../views/", "frontpage.pug"));
        } else {
            res.status(404);
            res.send("** Page Not Found **");
        }
    });
}



