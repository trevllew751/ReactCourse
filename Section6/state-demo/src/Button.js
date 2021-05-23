import React, {Component} from 'react';

class Button extends Component {
    render() {
        return (
            <button onClick={() => {
                alert("Clicked!");
            }}>Click Me!</button>
        );
    }
}

export default Button;