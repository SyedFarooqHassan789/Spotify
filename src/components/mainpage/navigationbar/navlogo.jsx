import React, {Component} from 'react';
import {render} from 'react-dom';


class NavLogo extends Component {
    render() {
        return (
            <a className="navbar-brand" href={this.props.linkTo}>{this.props.text}</a>
        );
    }
}
module.exports = NavLogo
