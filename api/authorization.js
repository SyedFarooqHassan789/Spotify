var request = require("request");
var querystring = require("querystring");
var path = require("path");

module.exports = function authorize_spotify_api(req, res, callback) {
    var body = {
        grant_type: config.postapiauth.grant_type,
        redirect_uri: config.postapiauth.redirect_uri,
        code: req.query.code
    }
    var bodyData = querystring.stringify(body);

    request({
        headers: {
            "Authorization": config.postapiauth.Authorization,
            "Content-Type": config.postapiauth.ContentType,
            "Accept": config.postapiauth.Accept,
        },
        body: bodyData,
        uri: config.postapiauth.uri,
        method: "POST"
    }, function (err, response, body) {
        if (err)
            console.log("Spotify api authentication fail")
        callback({
            accessToken: JSON.parse(response.body).access_token,
            refreshToken: JSON.parse(response.body).refresh_token
        })
    });

}
