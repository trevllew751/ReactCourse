import React, {Component} from 'react';

class CounterClass extends Component {
    state = {count: 0};
    render() {
        return (
            <div>
                <h1>The Count Is: {this.state.count}</h1>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Add 1
                </button>
            </div>
        );
    }
}

export default CounterClass;