import {v4 as uuid} from "uuid";

const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            return [...state, {id: uuid(), task: action.task, completed: false}];
        case "DELETE":
            return state.filter(todo => todo.id !== action.id);
        case "TOGGLE":
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo);
        case "UPDATE":
            return state.map(todo => todo.id === action.id ? {...todo, task: action.task} : todo);
        default:
            return state;
    }
};

export default reducer;