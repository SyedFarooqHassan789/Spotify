var User = require("../model/user");
var jwt = require('jsonwebtoken');

module.exports = function authenticate(req, res, next) {
    User.findOne({
        email: req.body.email.value
    }, function (err, user) {
        if (err) throw err;
        if (!user) {
            res.json({success: false, message: 'Authentication failed. User not found.'});
        } else if (user) {
            user.comparePassword(req.body.password.value, function (err, isMatch) {
                if (isMatch && !err) {
                    // if user is found and password is right create a token
                    var token = jwt.sign(user.toJSON(), config.db.secret, {
                        expiresIn: 1440 // expires in 24 hours
                    });
                    var url = config.getapiauth.url;
                    res.json({success: true, token: token, redir: url});
                }
                else {
                    res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});

                }
            });
        }

    });


}
