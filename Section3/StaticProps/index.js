class App extends React.Component {
    render() {
        return (
            <div>
                <Hello
                    to={"Kyojuro"}
                    from={"Rengoku"}
                    bangs={30}
                />
                <Hello
                    to={"Tanjiro"}
                    // from={"Kamado"}
                    bangs={30}
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))