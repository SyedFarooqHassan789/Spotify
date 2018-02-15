var React = require('react');


class Logo extends React.Component {
    render() {
        return (
            <div>
                <img className="logo" src="/images/spotifyLogo.png" alt="logo"></img>
                <img className="logo musiclogo" src="/images/musicLogo.png" alt="musiclogo"></img>
            </div>
        );
    }
}
module.exports = Logo;
