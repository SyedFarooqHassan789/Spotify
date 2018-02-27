import React, {Component} from 'react';
import {render} from 'react-dom';


class NavLogo extends Component {
    render() {
        return (
            <a className="navlogo" href={this.props.linkTo}>
                <img className="mainlogo" src={this.props.imgsrc.logo}/>
            </a>

        );
    }
}
module.exports = NavLogo
