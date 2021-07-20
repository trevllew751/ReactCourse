import React from 'react';
import {Paper, Divider} from "@material-ui/core";
import TodoItem from "./TodoItem";
import {TodosContext} from "./contexts/todos.context";

function TodoList() {
    const todos = React.useContext(TodosContext);
    return (
        <Paper>
            {todos.map(todo =>
                <React.Fragment key={todo.id}>
                    <TodoItem {...todo}/>
                    <Divider/>
                </React.Fragment>
            )}
        </Paper>
    );
}

export default TodoList