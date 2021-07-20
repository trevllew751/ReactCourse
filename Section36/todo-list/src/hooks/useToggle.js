import React from 'react';

function useToggle(initialValue=false) {
    // call useState, "reserve a piece of state"
    const [state, setState] = React.useState(initialValue);
    const toggle = () => {
        setState(!state);
    };
    return [state, toggle];
}

// return piece of state and function to toggle it
export default useToggle;