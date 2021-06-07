import About from "./About";
import Contact from "./Contact";
import Dog from "./Dog";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "about"
        }
    }

    changePage(page) {
        this.setState({page})
    }

    renderPage() {
        if (this.state.page === "about") {
            return <About/>
        }
        else if (this.state.page === "contact") {
            return <Contact/>
        }
        else if (this.state.page === "dog") {
            return <Dog/>
        }
    }

    render() {
        return (
            <div className="App">
                <nav>
                    <a onClick={() => this.changePage("about")}>About</a>
                    <a onClick={() => this.changePage("dog")}>Dog</a>
                    <a onClick={() => this.changePage("contact")}>Contact</a>
                </nav>
                {this.renderPage()}
            </div>
        );
    }
}

export default App;