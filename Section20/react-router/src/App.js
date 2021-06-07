import React, {Component} from 'react';
import './App.css';
import About from "./About";
import Dog from "./Dog";
import Contact from "./Contact";
import {Route, Switch, NavLink} from "react-router-dom";

const DogMan = () => <h1>DOG MAN!</h1>

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "about"
        }
    }

    render() {
        return (
            <div className="App">
                <nav>
                    <NavLink activeClassName={"active-link"} to="/dog/r">Dog</NavLink>
                    <NavLink activeClassName={"active-link"} to="/dog/c">Dog</NavLink>
                    <NavLink activeClassName={"active-link"} to="/about">About</NavLink>
                    <NavLink activeClassName={"active-link"} to="/contact">Contact</NavLink>
                </nav>
                <Switch>
                    <Route exact path={"/about"} component={About}/>
                    <Route exact path={"/contact"} component={Contact}/>
                    <Route exact path={"/dog/c"} component={() => <Dog name={"Puppy"}/>}/>
                    <Route exact path={"/dog/r"} render={() => <Dog name={"Puppo"}/>}/>
                    <Route exact path={"/dog/man"} component={DogMan}/>
                </Switch>
            </div>
        );
    }
}

export default App;