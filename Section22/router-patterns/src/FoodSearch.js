import React, {Component} from 'react';
import {Link} from "react-router-dom";

class FoodSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.setState({search: e.target.value});
    }

    handleClick() {
        alert("You saved a food!")
        this.props.history.push(`/food/${this.state.search}`);
    }

    render() {
        return (
            <div>
                <h1>Search for a food!</h1>
                <label htmlFor="search">Search Food: </label>
                <input
                    type="text" name="search" id="search" placeholder={"Search for a food"}
                    onChange={this.handleChange}/>
                <Link to={`/food/${this.state.search}`}>Go!</Link>
                <button onClick={this.handleClick}>Save Food!</button>
            </div>
        );
    }
}

export default FoodSearch;