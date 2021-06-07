import React, {Component} from 'react';
import {NavLink} from "react-router-dom";


class VendingMachine extends Component {
    render() {
        return (
            <div>
                <h1>Vending Machine!</h1>
                <NavLink to={"/chips"}>Chips</NavLink>
                <NavLink to={"/candy"}>Candy</NavLink>
                <NavLink to={"/soda"}>soda</NavLink>
            </div>
        );
    }
}

export default VendingMachine;