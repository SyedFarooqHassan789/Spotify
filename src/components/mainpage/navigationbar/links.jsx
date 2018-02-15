import React, {Component} from 'react';
import {render} from 'react-dom';


class NavLink extends Component {
    render() {
        return(
            <li className={(this.props.active ? "active" : "")}><a href={this.props.linkTo}>{this.props.text}</a></li>
        );
    }
}
module.exports = NavLink
