import React, {Component} from 'react';

class Demo extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <h1>DEMO COMPONENT</h1>
            </div>
        );
    }
}

export default Demo;