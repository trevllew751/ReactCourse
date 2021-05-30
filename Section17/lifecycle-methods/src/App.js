import './App.css';
// import Timer from "./Timer";
// import ZenQuote from "./ZenQuote";
import GithubUserInfo from "./GithubUserInfo";

function App() {
    return (
        <div className="App">
            {/*<Timer/>*/}
            {/*<ZenQuote/>*/}
            <GithubUserInfo username={"trevllew751"}/>
            <GithubUserInfo username={"facebook"}/>
        </div>
    );
}

export default App;
