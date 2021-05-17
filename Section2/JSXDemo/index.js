function getMood() {
    const moods = ["Happy", "Sad", "Angry", "Tired"];
    return moods[Math.floor(Math.random() * moods.length)];
}


class Index extends React.Component {
    render() {
        // return (
        //     <div>
        //         <img
        //             src="https://images.unsplash.com/photo-1621242657711-db0dc6af1da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80" alt=""/>
        //     </div>
        // );
        return (
            <div>
                <h1>My Current Mood is: {getMood()}</h1>
            </div>
        )
    }
}

ReactDOM.render(<Index/>, document.getElementById("root"));