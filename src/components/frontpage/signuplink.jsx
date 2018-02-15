var React = require('react');


class SignUp extends React.Component {
    render() {
        return (
            <div>
                <h2 className="heading"> Greetings from personal Spotify! Want to Listen Music</h2>
                <h2 className="form-signin-heading heading signUpBlock">Not a member?
                    <a href="/signup" className="btn btn-lg btn-danger btn-block frontPageButton signUpButton"
                       role="button">SignUp</a>
                </h2>
            </div>

        );
    }
}

module.exports = SignUp
