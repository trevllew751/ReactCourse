import React from 'react';
import {TextField} from "@material-ui/core";
import useInputState from "./hooks/useInputState";

function EditTodoForm({id, updateTodo, task, toggle}) {

    const [value, handleChange, reset] = useInputState(task);

    return (
        <form
            style={{marignLeft: "1rem", width: "50%"}}
            onSubmit={e => {
                e.preventDefault();
                updateTodo(id, value);
                toggle();
                reset();
            }
            }>
            <TextField
                value={value}
                onChange={handleChange}
                margin={"normal"}
                label={"Edit Todo"}
                fullWidth={true}
                autoFocus={true}/>
        </form>
    );
}

export default EditTodoForm;