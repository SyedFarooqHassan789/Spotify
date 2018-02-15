"use strict";

var Path = require('path'),
    _ = require('lodash');


// Config defaults
var configDefaults = {
    // Paths
    viewPath: Path.join(__dirname + "/../views"),
    publicContentPath: Path.join(__dirname, "/../public"),
    logPath: Path.join(__dirname, "../logs"),

    // Server settings
    host: "0.0.0.0",
    port: 8899,

    // Database
    db: {
        mongoUri: "mongodb://localhost/myappdatabase",
        secret: 'spotifyapp'
    },

    // Domain-specific overrides
    domains: {},

};


try {
    global.config = require(Path.join(__dirname, "../config.json"));
} catch (e) {
    console.error("Failed to open configuration file \"config.json\"\n  " + e + "\nUsing defaults.");
    global.config = {};
}

global.config = _.defaultsDeep(global.config, configDefaults);

