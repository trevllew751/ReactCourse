import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        console.log("In constructor")
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        console.log("Component did mount")
        this.timerId = setInterval(() => {
            this.setState({time: new Date()})
        }, 1000);
    }

    render() {
        console.log("In render")
        return (
            <div>
                <h1>{this.state.time.getSeconds()}</h1>
            </div>
        );
    }
}

export default Timer;