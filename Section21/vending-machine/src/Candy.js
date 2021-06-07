import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Candy extends Component {
    render() {
        return (
            <div>
                <h1>CANDY!!!</h1>
                <NavLink to={"/"}>GO BACK</NavLink>
            </div>
        );
    }
}

export default Candy;