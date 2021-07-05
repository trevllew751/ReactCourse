import React from 'react';
import {Typography, Paper, AppBar, Toolbar, Grid} from "@material-ui/core";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import useTodoState from "./hooks/useTodoState";

function TodoApp() {

    const initialTodos = [];

    const {todos, addTodo, deleteTodo, toggleTodo, updateTodo} = useTodoState(initialTodos)

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}>
            <AppBar color={"primary"} position={"static"} style={{height: "64px"}}>
                <Toolbar>
                    <Typography color={"inherit"}>TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justifyContent={"center"} style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm addTodo={addTodo}/>
                    <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} updateTodo={updateTodo}/>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default TodoApp;