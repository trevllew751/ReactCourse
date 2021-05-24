import React, {Component} from 'react';
import Coin from "./Coin";
import "./CoinFlipper.css"

class CoinFlipper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heads: true,
            firstFlip: false,
            flipCount: 0,
            headsCount: 0,
            tailsCount: 0
        }
        this.flipCoin = this.flipCoin.bind(this);
    }

    flipCoin() {
        this.setState(st => {
            let heads = Math.random() < 0.5;
            return {
                firstFlip: true,
                flipCount: st.flipCount + 1,
                heads,
                headsCount: st.headsCount + (heads ? 1 : 0),
                tailsCount: st.tailsCount + (heads ? 0 : 1)
            };
        });
    }

    render() {
        return (
            <div>
                <h1>Coin Flipper</h1>
                {this.state.firstFlip && <Coin heads={this.state.heads}/>}
                <button onClick={this.flipCoin}>Click to Flip</button>
                <h3>Out of {this.state.flipCount} flips, there have been {this.state.headsCount} heads
                    and {this.state.tailsCount} tails.</h3>
            </div>
        );
    }
}

export default CoinFlipper;