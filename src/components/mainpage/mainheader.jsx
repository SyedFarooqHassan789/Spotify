import React, {Component} from "react";
import {render} from "react-dom";


class MainHeader extends Component {
    render() {
        return (
            <div class="container">
                <div class="jumbotron">
                    <h1>Music Without Restriction</h1>
                    <p>As a premium subscriber you can listen to any song at any time</p>
                    <a class="btn btn-lg btn-success btn-block" href="#" role="button">Listen For The First 30 Days For Free</a>
                </div>
            </div>
        )
    }
}
module.exports = MainHeader
