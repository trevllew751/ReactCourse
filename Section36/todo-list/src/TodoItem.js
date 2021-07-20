import React from 'react';
import {ListItem, ListItemText, Checkbox, IconButton} from "@material-ui/core";
import {Delete, Edit} from "@material-ui/icons";
import useToggle from "./hooks/useToggle";
import EditTodoForm from "./EditTodoForm";
import {DispatchContext} from "./contexts/todos.context";

function TodoItem({task, completed, id}) {

    const [isEditing, toggle] = useToggle(false);
    const dispatch = React.useContext(DispatchContext);

    return (
        <ListItem style={{height: "64px"}}>
            {isEditing ? <EditTodoForm id={id} task={task} toggle={toggle}/> :
                <><Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({type: "TOGGLE", id})}/>
                    <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                        {task}
                    </ListItemText>
                    <IconButton aria-label={"Delete"} onClick={() => dispatch({type: "DELETE", id})}>
                        <Delete/>
                    </IconButton>
                    <IconButton aria-label={"Edit"} onClick={() => toggle()}>
                        <Edit/>
                    </IconButton></>}
        </ListItem>
    );
}

export default React.memo(TodoItem);