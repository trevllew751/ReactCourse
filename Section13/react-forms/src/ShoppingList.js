import React, {Component} from 'react';
import ShoppingListForm from "./ShoppingListForm";
import { v4 as uuidv4 } from 'uuid';

class ShoppingList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {name: "Milk", qty: "2 gallons", key: uuidv4()},
                {name: "Bread", qty: "2 loaves", key: uuidv4()}
            ]
        }
        this.addItem = this.addItem.bind(this);
    }

    addItem(item) {
        let newItem = {...item, key: uuidv4()};
        this.setState(st => ({
            items: [...st.items, newItem]
        }));
    }

    render() {
        return (
            <div>
                <h1>Shopping List</h1>
                <ul>
                    {this.state.items.map(item =>
                        <li key={item.key}>{item.name}:{item.qty}</li>)}
                </ul>
                <ShoppingListForm addItem={this.addItem}/>
            </div>
        );
    }
}

export default ShoppingList;