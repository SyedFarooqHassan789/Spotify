import React, {Component} from "react";
import {render} from "react-dom";
var NavLink =  require("./links")
class NavDropDown extends Component {
    render() {
        var active = false;
        var links = this.props.links.map(function(link){
            if(link.active){
                active = true;
            }
            return (
                <NavLink linkTo={link.linkTo} text={link.text} active={link.active} />
            );
        });
        return (
            <li className={"dropdown " + (active ? "active" : "")}>
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                    {this.props.text}
                    <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                    {links}
                </ul>
            </li>
        );
    }
}
module.exports = NavDropDown
