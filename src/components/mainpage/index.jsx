import React, {Component} from "react";
import {render} from "react-dom";
var NavBar = require("./navigationbar/navbar");


class NavigationBar extends Component {
    render() {
        return (
            <NavBar {...navbar}></NavBar>
        )
    }
}
var navbar = {};
navbar.brand =
    {linkTo: "#", text: "React Bootstrap Navbar"};
navbar.links = [
    {linkTo: "#", text: "Link 1"},
    {linkTo: "#", text: "Link 2"},
    {
        dropdown: true, text: "Dropdown", links: [
        {linkTo: "#", text: "Dropdown Link 1"},
        {linkTo: "#", text: "Dropdown Link 2", active: true}
    ]
    }
];

render(<NavigationBar {...navbar} />, document.getElementById('divmainpage'));
