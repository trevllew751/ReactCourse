import React from 'react';
import useInputState from "./hooks/useInputState";

function SimpleFormInputHooks(props) {
    const [email, setEmail, resetEmail] = useInputState("");
    const [password, setPassword, resetPassword] = useInputState("");

    return (
        <div>
            <h1>Email is: {email}</h1>
            <h1>Password is: {password}</h1>
            <input type="text" value={email} onChange={setEmail} placeholder={"Email"}/>
            <button onClick={resetEmail}>Submit</button>
            <br/>
            <input type="text" value={password} onChange={setPassword} placeholder={"Password"}/>
            <button onClick={resetPassword}>Submit</button>
        </div>
    );
}

export default SimpleFormInputHooks;