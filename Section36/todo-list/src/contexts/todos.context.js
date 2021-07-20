import React from "react";
import TodoReducer from "../reducers/todo.reducer";
import useLocalStorageReducer from "../hooks/userLocalStorageReducer";

const defaultTodos = [
    {id: 1, task: "Mow lawn", completed: false},
    {id: 2, task: "Do dishes", completed: false}
];

const TodosContext = React.createContext();
const DispatchContext = React.createContext();

function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, TodoReducer);
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}

export {TodosContext, DispatchContext, TodosProvider};