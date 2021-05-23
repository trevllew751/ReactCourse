import React, {Component} from 'react';

class BrokenClick2 extends Component {
    constructor(props) {
        super(props);
        this.state = {clicked: false};
    }

    handleClick = e => {
        this.setState({clicked: true});     // Alternate syntax for binding the context of the function
    }

    render() {
        return (
            <div>
                <h1>{this.state.clicked ? "Clicked!" : "Not Clicked!"}</h1>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        );
    }
}

export default BrokenClick2;