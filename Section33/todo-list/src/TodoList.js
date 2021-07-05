import React from 'react';
import {Paper, Divider} from "@material-ui/core";
import TodoItem from "./TodoItem";

function TodoList({todos, deleteTodo, toggleTodo, updateTodo}) {
    return (
        <Paper>
            {todos.map(todo =>
                <React.Fragment key={todo.id}>
                    <TodoItem
                        {...todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        updateTodo={updateTodo}
                    />
                    <Divider/>
                </React.Fragment>
            )}
        </Paper>
    );
}

export default TodoList