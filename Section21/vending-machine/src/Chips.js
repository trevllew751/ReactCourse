import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Chips extends Component {
    render() {
        return (
            <div>
                <h1>CHIPS!!!</h1>
                <NavLink to={"/"}>GO BACK</NavLink>
            </div>
        );
    }
}

export default Chips;