class App extends React.Component {
    render() {
        return (
            <div>
                <Friend
                    name={"Eric Andre"}
                    hobbies={["Comedy", "Interviews", "Drinking"]}
                /><Friend
                    name={"The Enthusiast"}
                    hobbies={["Apex Legends", "Working Out"]}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))