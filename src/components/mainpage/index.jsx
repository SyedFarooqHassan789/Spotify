import React, {Component} from "react";
import {render} from "react-dom";
var NavBar = require("./navigationbar/navbar");
var MainHeader = require("./mainheader");
var logo = require("./../../../public/images/spotifyLogo.png");

class NavigationBar extends Component {

    render() {
        var navbar = {};
        navbar.logo =
            {imagesrc: {logo}, linkTo: "#", text: "Spotify"};
        navbar.links = [
            {linkTo: "#", text: "Premium"},
            {linkTo: "#", text: "Guide"},
            {linkTo: "#", text: "Update your order"},
            {
                dropdown: true, text: "Profile", links: [
                {linkTo: "#", text: "Dropdown Link 1"},
                {linkTo: "#", text: "Dropdown Link 2", active: false}
            ]
            }
        ];
        return (
            <div>
                <NavBar {...navbar}></NavBar>
                <MainHeader></MainHeader>



            </div>

        )
    }
}

render(<NavigationBar/>, document.getElementById('divmainpage'));
