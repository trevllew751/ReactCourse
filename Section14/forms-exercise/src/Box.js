import React, {Component} from 'react';

class Box extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.deleteBox(this.props)
    }

    render() {
        const {backgroundColor, height, width} = this.props;
        const styles = {backgroundColor, height, width};
        return (
            <div style={{display: "flex", flexDirection: "column", width}}>
                <div style={styles}>
                </div>
                <button onClick={this.handleClick}>Delete Box</button>
            </div>
        );
    }
}

export default Box;