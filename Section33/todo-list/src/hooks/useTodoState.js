import {v4 as uuid} from "uuid";
import useLocalStorageState from "./useLocalStorageState";

function useTodoState(initialTodos) {

    const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
        },
        deleteTodo: todoId => {
            setTodos(todos.filter(todo => todo.id !== todoId));
        },
        toggleTodo: todoId => {
            setTodos(todos.map(todo => todo.id === todoId ? {...todo, completed: !todo.completed} : todo));
        },
        updateTodo: (todoId, newTask) => {
            setTodos(todos.map(todo => todo.id === todoId ? {...todo, task: newTask} : todo));
        }
    }

}

export default useTodoState;