var Path = require('path'),
    server = require('./appserver.js');
console.log("* Initializing server...");
try {
    require('./config.js');
} catch(err) {
    if (err) {
        console.error("Failed initalize config: " + err
            + (err.stack ? "\n"+err.stack : ""));
        process.exit(2);
    }
}
//global.Model = require('./model');
global.serverVersion = require(Path.join(__dirname, "../package.json")).version;
server.init((err) => {
    if (err) {
        console.error("Failed to initialize server: " + err
            + (err.stack ? "\n" + err.stack : ""));
        // Server initialization failed, exit process and tell frontpage not to try again.
        process.exit(2);
    }

    console.log("  Server ready.");
});
