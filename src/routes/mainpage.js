var fs = require("fs");
var path = require("path");



module.exports = function load_jade(req, res, next) {
    fs.exists(__dirname + "/../../views/" + "mainpage" + ".html", function (exists) {
        if (exists) {
            res.sendFile(path.resolve(__dirname + "/../../views/" + "mainpage" + ".html"));
        } else {
            res.status(404);
            res.send("** Page Not Found **");
        }
    });
}
