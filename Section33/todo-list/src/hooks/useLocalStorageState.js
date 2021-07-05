import React from "react";

function useLocalStorageState(key, defaultVal) {
    const [state, setState] = React.useState(JSON.parse(window.localStorage.getItem(key)) || defaultVal);
    React.useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    return [state, setState];
}

export default useLocalStorageState;