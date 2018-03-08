var fs = require("fs");
var apiauth = require("./../../api/authorization")
var path = require("path");

module.exports = function load_jade(req, res, next) {
    fs.exists(__dirname + "/../../views/" + "mainpage" + ".pug", function (exists) {
        if (exists) {
            var callback = function (data, err) {
                if (err)
                    console.log("Cannot show main page")
                res.render(path.resolve(__dirname + "/../../views/" + "mainpage" + ".pug"), {token: JSON.stringify(data)});
            }
            apiauth(req, res, callback);

        } else {
            res.status(404);
            res.send("** Page Not Found **");
        }
    });
}
