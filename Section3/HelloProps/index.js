class App extends React.Component {
    render() {
        return (
            <div>
                <Hello to={"Ringo"} from={"Paul"}/>
                <Hello to={"A"} from={"B"}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))