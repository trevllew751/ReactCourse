import React, {Component} from 'react';
import {v4 as uuid} from "uuid"

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: this.props.item || ""
        }
        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.props.editing) {
            this.props.saveItem({...this.state})
        } else {
            this.props.addItem({...this.state, id: uuid()});
        }
        this.setState({item: ""})
    }

    render() {
        const label = this.props.editing ? "" : "New Todo: ";
        const button = this.props.editing ? "Save Changes" : "Add Todo";
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <label htmlFor="item">{label}</label>
                <input
                    type="text"
                    name="item"
                    id="item"
                    value={this.state.item}
                    onChange={this.onChange}/>
                <button>{button}</button>
            </form>
        );
    }
}

export default NewTodoForm;