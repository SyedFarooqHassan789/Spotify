import React, {Component} from "react";
import {render} from "react-dom";
var NavLink = require("./links");
var NavLinkDropdown =  require("./navdropdown");

class NavMenu extends Component {
    render() {
        var links = this.props.links.map(function (link) {
                if (link.dropdown) {
                    return (
                        <NavLinkDropdown links={link.links} text={link.text} active={link.active}/>
                    );
                }
                else {
                    return (
                        <NavLink linkTo={link.linkTo} text={link.text} active={link.active}/>
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
