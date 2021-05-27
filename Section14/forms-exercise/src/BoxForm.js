import React, {Component} from 'react';
import {v4 as uuid} from "uuid";

class BoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "",
            height: "",
            width: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.addBox({...this.state, uid: uuid()});
        this.setState({
            backgroundColor: "",
            height: "",
            width: ""
        })
    }

    render() {
        return (
            <div>
                <form action="" onSubmit={this.handleSubmit}>
                    <div><label htmlFor="width">Width:</label>
                        <input
                            type="text"
                            id={"width"}
                            name={"width"}
                            value={this.state.width}
                            onChange={this.handleChange}
                        /></div>
                    <div><label htmlFor="height">Height:</label>
                        <input
                            type="text"
                            id={"height"}
                            name={"height"}
                            value={this.state.height}
                            onChange={this.handleChange}
                        /></div>
                    <div><label htmlFor="backgroundColor">Background Color:</label>
                        <input
                            type="text"
                            id={"backgroundColor"}
                            name={"backgroundColor"}
                            value={this.state.backgroundColor}
                            onChange={this.handleChange}
                        /></div>
                    <button>Add Box</button>
                </form>
            </div>
        );
    }
}

export default BoxForm;