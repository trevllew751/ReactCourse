import React from 'react';

function CounterHooks(props) {
    // useState returns an array where the first element the piece of state
    // and the second element is a function to update that piece of state
    // The parameter of  the useState method is the initial state
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>The Count Is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>
                Add 1
            </button>
        </div>
    );
}

export default CounterHooks;