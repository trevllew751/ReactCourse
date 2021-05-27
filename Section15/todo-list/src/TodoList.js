import React, {Component} from 'react';
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css"

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.editItem = this.editItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    editItem(item) {
        let newItems = [...this.state.items];
        for (let i = 0; i < newItems.length; i++) {
            if (newItems[i].id === item.id) {
                newItems[i].item = item.item;
            }
        }
        this.setState({items: newItems});
    }

    deleteItem(id) {
        this.setState(state => ({
            items: state.items.filter(item => item.id !== id)
        }))
    }

    addItem(item) {
        this.setState(state => ({items: [...state.items, item]}))
    }

    render() {
        return (
            <div>
                <h1>Todo List!</h1>
                <div>
                    {this.state.items.map(item =>
                        <Todo
                            item={item.item}
                            id={item.id}
                            key={item.id}
                            deleteItem={this.deleteItem}
                            editItem={this.editItem}/>)}
                </div>
                <h3>New Todo</h3>
                <NewTodoForm
                    addItem={this.addItem}
                    editing={false}/>
            </div>
        );
    }
}

export default TodoList;