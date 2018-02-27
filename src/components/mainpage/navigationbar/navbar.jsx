import React, {Component} from "react";
import {render} from "react-dom";
var NavLogo = require("./navlogo");
var NavMenu = require("./navmenu");

class NavigationBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                data-target="#navbar-collapse" aria-expanded="false">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLogo imgsrc={this.props.logo.imagesrc} linkTo={this.props.logo.linkTo} text={this.props.logo.text}/>
                    </div>
                    <div className="collapse navbar-collapse" id="navbar-collapse">
                        <NavMenu links={this.props.links}/>
                    </div>
                </div>
            </nav>
        )
    }
}

module.exports = NavigationBar
