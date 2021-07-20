import React from "react";

function useLocalStorageReducer(key, defaultVal, reducer) {
    const [state, dispatch] = React.useReducer(reducer, defaultVal,
        () => JSON.parse(window.localStorage.getItem(key)) || defaultVal);
    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, dispatch];
}

export default useLocalStorageReducer;