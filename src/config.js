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
        secret: "spotifyapp"
    },

    //Spotify Api authentication url
    getapiauth: {
        url: "https://accounts.spotify.com/authorize/?client_id=ae6424e4ecc84ae1af01a1c62a919939&response_type=code&redirect_uri=http://localhost:8899/mainpage&scope=user-read-private"
    },
    postapiauth: {
        uri: "https://accounts.spotify.com/api/token",
        redirect_uri: "http://localhost:8899/mainpage",
        grant_type: "authorization_code",
        method: "POST",
        Authorization: "Basic " + new Buffer("ae6424e4ecc84ae1af01a1c62a919939" + ':' + "cc5d9abeaf384c9ea03f167f4d0a04c8").toString('base64'),
        ContentType: 'application/x-www-form-urlencoded',
        Accept: 'application/json'
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

