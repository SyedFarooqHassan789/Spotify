import React, {Component} from "react";
import {render} from "react-dom";
var NavLink = require("./links");
var NavDropdown = require("./navdropdown");

class NavMenu extends Component {
    render() {
        var links = this.props.links.map(function (link) {
                if (link.dropdown) {
                    return (
                        <NavDropdown key= {link.text} links={link.links} text={link.text} active={link.active}/>
                    );
                }
                else {
                    return (
                        <NavLink key= {link.text} linkTo={link.linkTo} text={link.text} active={link.active}/>
                    );
                }
            }
        );
        return (
            <ul className="nav navbar-nav">
                {links}
            </ul>
        );
    }
}
module.exports = NavMenu
