import React, {Component} from 'react';
import Box from "./Box";
import "./ColorBoxes.css"

class ColorBoxes extends Component {
    static defaultProps = {
        numBoxes: 16
    }

    constructor(props) {
        super(props);

    }

    render() {
        const boxes = Array.from({length: this.props.numBoxes}).map(box => <Box/>);
        return (
            <div className={"ColorBoxes"}>
                {boxes}
            </div>
        );
    }
}

export default ColorBoxes;