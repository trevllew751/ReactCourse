import React, {Component} from 'react';
import LottoBall from "./LottoBall"
import "./Lottery.css"

class Lottery extends Component {
    static defaultProps = {
        maxNum: 40,
        numBalls: 6,
        title: "Lottery"
    }

    constructor(props) {
        super(props);
        this.state = { nums: Array.from({ length: this.props.numBalls }) };
        this.generate = this.generate.bind(this);
    }

    generate() {
        this.setState(st => ({
            nums: st.nums.map(num => Math.floor(Math.random() * this.props.maxNum + 1))
        }));
    }

    render() {
        return (
            <div className={"Lottery"}>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(ball => <LottoBall num={ball}/>)}
                </div>
                <button onClick={this.generate}>Generate</button>
            </div>
        );
    }
}

export default Lottery;