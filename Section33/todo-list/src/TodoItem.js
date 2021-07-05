import React from 'react';
import {ListItem, ListItemText, Checkbox, IconButton} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";

function TodoItem({task, completed, id, deleteTodo, toggleTodo, updateTodo}) {

    const [isEditing, toggle] = useToggle(false);

    return (
        <ListItem style={{height: "64px"}}>
            {isEditing ? <EditTodoForm updateTodo={updateTodo} id={id} task={task} toggle={toggle}/> :
                <><Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTodo(id)}/>
                    <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                        {task}
                    </ListItemText>
                    <IconButton aria-label={"Delete"} onClick={() => deleteTodo(id)}>
                        <Delete/>
                    </IconButton>
                    <IconButton aria-label={"Edit"} onClick={() => toggle()}>
                        <Edit/>
                    </IconButton></>}
        </ListItem>
    );
}

export default TodoItem;