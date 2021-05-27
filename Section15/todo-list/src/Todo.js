import React, {Component} from 'react';
import NewTodoForm from "./NewTodoForm";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
            complete: false
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.markComplete = this.markComplete.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }

    handleDelete() {
        this.props.deleteItem(this.props.id);
    }

    handleEdit() {
        this.setState({editing: true});
    }

    markComplete() {
        this.setState(state => ({
            complete: !state.complete
        }));
    }

    handleSave(item) {
        this.props.editItem({...item, id: this.props.id});
        this.setState({editing: false});
    }

    render() {
        let complete = this.state.complete ? {textDecoration: "line-through"} : {};
        let state = this.state.editing
            ? <NewTodoForm
                item={this.props.item}
                saveItem={this.handleSave}
                editing={true}/>
            : <div className={"Todo"}>
                <span onClick={this.markComplete} style={complete}>{this.props.item}</span>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        return (
            <div>
                {state}
            </div>
        );
    }

}

export default Todo;