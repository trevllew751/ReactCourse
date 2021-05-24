import React, {Component} from 'react';
import {choice} from "./Helpers";
import "./Box.css"

class Box extends Component {
    static defaultProps = {
        colors: [
            "red",
            "orange",
            "yellow",
            "green",
            "blue",
            "indigo",
            "violet",
            "black",
            "white",
            "grey"
        ]
    }

    constructor(props) {
        super(props);
        this.state = {color: choice(this.props.colors)};
        this.changeColor = this.changeColor.bind(this);
    }

    changeColor() {
        let newColor;
        do {
            newColor = choice(this.props.colors);
        } while (newColor === this.state.color);
        this.setState({color: newColor});
    }


    render() {
        return (
            <div onClick={this.changeColor} className={`Box`} style={{backgroundColor: this.state.color}}>
            </div>
        );
    }
}

export default Box;