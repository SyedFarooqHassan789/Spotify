import React, {Component} from "react";
import {render} from "react-dom";

class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            searchText: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({searchText: event.target.value});
    }

    render() {
        return (
            <form className="navbar-form navbar-left searchbar" role="search">
                <div className="form-group">
                    <input
                        type="text" placeholder="Search..." value={this.state.searchText} ref="filterTextInput"
                        onChange={this.handleChange} className="form-control"/>

                    <button type="submit" className="btn btn-default">
                        <span className="glyphicon glyphicon-search"></span>
                    </button>
                </div>
            </form>

        )
    }

}
module.exports = SearchBar;