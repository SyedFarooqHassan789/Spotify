require('babel-core/register')({
    presets: ['es2015', 'react']
});


var express = require("express"),
    path = require("path");
var bodyparser = require("body-parser");

function init(cb) {
    try {
        var app = express();
        module.exports.app = app;
        require("./model/db");
        app.disable("x-powered-by");
        app.set("trust proxy", true);
        app.set('superSecret', config.db.secret);
        app.use((require("cookie-parser"))());
        app.use(express.static(config.publicContentPath));
        app.set("views", config.viewPath);
        app.set("view engine", "jsx");
        app.engine("jsx", require("express-react-views").createEngine());

        // Enable auth preflight OPTIONS
        app.use((req, res, next) => {
            if (req && req.method === "OPTIONS") {
                res.sendStatus(200);
                return;
            }
            next();
        });
        app.use(bodyparser.urlencoded({
            extended: true
        }));
        app.use(bodyparser.json());
        // Install page routers
        app.use(require("./routes").routes);
        app.use((req, res, next) => {
            console.log("Unhandled URL: [" + req.ip + "] " + req.method + " " + req.originalUrl);
            res.sendStatus(404);
        });

        // Handle request errors
        app.use((err, req, res, next) => {
            console.error("HTTP server failed to handle request: " + err.stack);
            res.sendStatus(500);
        });

        // Create server
        var server = require('http').createServer(app);


        // Handle server errors
        server.on("error", function (e) {
            console.log("HTTP server error: %s", e);
        });

        server.listen(config.port, config.host, () => {
            let addr = server.address();
            console.log("HTTP server listening on " + addr.address + ":" +
                addr.port);
            setImmediate(cb);
        });


    }
    catch (err) {
        cb(err)
    }
}
module.exports.init = init;
