class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Slot Machines!</h1>
                <Machine s1={"😊"} s2={"😊"} s3={"😊"}/>
                <Machine s1={"X"} s2={"Y"} s3={"Z"}/>
                <Machine s1={"X"} s2={"Y"} s3={"Y"}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))


