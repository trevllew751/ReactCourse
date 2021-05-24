import React, {Component} from 'react';
import "./Coin.css"

class Coin extends Component {
    render() {
        return (
            <div className={"Coin"}>
                {this.props.heads
                    ? <img src="https://www.usmint.gov/wordpress/wp-content/uploads/2020/12/2021-lincoln-penny-uncirculated-obverse-philadelphia-768x768.jpg" alt="heads"/>
                    : <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/United_States_penny%2C_reverse.jpg" alt="false"/>
                }
            </div>
        );
    }
}

export default Coin;