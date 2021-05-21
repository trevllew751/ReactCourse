class App extends React.Component {
    render() {
        return (
            <div>
                {/*<Hello*/}
                {/*    to={"Ringo"}*/}
                {/*    from={"Paul"}*/}
                {/*    bangs={4}*/}
                {/*/>*/}
                <Hello
                    to={"Kyojuro"}
                    from={"Rengoku"}
                    bangs={30}
                    img={"https://images.unsplash.com/photo-1621242657711-db0dc6af1da4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3450&q=80"}
                    // For embedding images
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))