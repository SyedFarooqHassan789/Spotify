var mongoose = require("mongoose");

var mongoose = mongoose.connect(config.db.mongoUri, function(err, db) {
    if (err) {
        console.log("Unable to connect to the server. Please start the server. Error:", err);
    } else {
        console.log("Connected to MongoDb Server successfully!");
    }
});

module.exports = mongoose;
