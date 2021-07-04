import React from 'react';

function SimpleFormHooks(props) {
    const [email, setEmail] = React.useState("");

    return (
        <div>
            <h1>The value is: {email}</h1>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <button onClick={() => setEmail("")}>Submit</button>
        </div>
    );
}

export default SimpleFormHooks;