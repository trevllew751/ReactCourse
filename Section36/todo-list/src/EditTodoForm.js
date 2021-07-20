import React from 'react';
import {TextField} from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import {DispatchContext} from "./contexts/todos.context";

function EditTodoForm({id, task, toggle}) {

    const [value, handleChange, reset] = useInputState(task);
    const dispatch = React.useContext(DispatchContext);

    return (
        <form
            style={{marignLeft: "1rem", width: "50%"}}
            onSubmit={e => {
                e.preventDefault();
                dispatch({type: "UPDATE", task: value, id});
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