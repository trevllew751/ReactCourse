import React, {Component} from 'react';
import Die from "./Die";
import "./RollDice.css"

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }

    constructor(props) {
        super(props);
        this.state = {
            rolling: false,
            die1: "one",
            die2: "one"
        }
        this.roll = this.roll.bind(this);
    }

    roll(e) {
        const rand2 = this.props.sides[(Math.floor(Math.random() * this.props.sides.length))];
        const rand1 = this.props.sides[(Math.floor(Math.random() * this.props.sides.length))];
        this.setState({die1: rand1, die2: rand2, rolling: true});
        setTimeout(args => {
            this.setState({rolling:false})
        }, 1000);
    }

    render() {
        return (
            <div className={"RollDice"}>
                <div className={"RollDice-row"}>
                    <Die side={this.state.die1} rolling={this.state.rolling}/>
                    <Die side={this.state.die2} rolling={this.state.rolling}/>
                </div>
                <div className={"RollDice-row"}>
                    <button className={"RollDice-button"} onClick={this.roll} disabled={this.state.rolling}>
                        {this.state.rolling ? "Rolling..." : "Roll Dice!"}
                    </button>
                </div>
            </div>
        );
    }
}

export default RollDice;