import React, {Component} from 'react';
import Box from "./Box";
import BoxForm from "./BoxForm";

class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
        this.deleteBox = this.deleteBox.bind(this);
    }

    addBox(box) {
        this.setState(state => ({
            boxes: [...state.boxes, box]
        }))
    }

    deleteBox(box) {
        let boxes = this.state.boxes.filter(b => b.uid !== box.uid);
        this.setState({boxes});
    }

    render() {

        return (
            <div className={"BoxList"}>
                <h1>Color Box Maker</h1>
                <BoxForm addBox={this.addBox}/>
                {this.state.boxes.map(box => {
                    return (
                        <Box
                            backgroundColor={box.backgroundColor}
                            height={box.height}
                            width={box.width}
                            uid={box.uid}
                            key={box.uid}
                            deleteBox={this.deleteBox}/>
                    )
                })}
            </div>
        );
    }

}

export default BoxList;
