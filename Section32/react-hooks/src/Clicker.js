import React from "react";

function Clicker() {
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        document.title = `You Clicked ${count} Times!`
    })

    return (
        <button onClick={() => setCount(count + 1)}>
            Click Me {count}
        </button>
    )
}

export default Clicker;