import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Soda extends Component {
    render() {
        return (
            <div>
                <h1>SODA!!!</h1>
                <NavLink to={"/"}>GO BACK</NavLink>
            </div>
        );
    }
}

export default Soda;