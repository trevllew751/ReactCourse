import React, {Component} from 'react';

class Dog extends Component {
    render() {
        return (
            <div>
                <p>Dog Component, Name is {this.props.name}</p>
            </div>
        );
    }
}

export default Dog;