import { Component } from "react";
import React from "react";
import "./search-box.styles.css"
class SearchBox extends Component {


    render() {
        return (
            <input placeholder='search'
                type='search'
                className="search"
                onChange={this.props.handleChange}>

            </input>

        );
    }
}
export default SearchBox;