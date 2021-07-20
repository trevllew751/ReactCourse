import React from 'react';
import {Paper, TextField} from "@material-ui/core";
import useInputState from "./hooks/useInputState";
import {DispatchContext} from "./contexts/todos.context";

function TodoForm() {

    const [value, handleChange, reset] = useInputState("");
    const dispatch = React.useContext(DispatchContext);

    return (
        <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    dispatch({type: "ADD", task: value})
                    reset();
                }}>
                <TextField
                    value={value}
                    onChange={handleChange}
                    margin={"normal"}
                    label={"Add New Todo"}
                    fullWidth={true}/>
            </form>
        </Paper>
    );
}

export default TodoForm;