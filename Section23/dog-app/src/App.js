import React, {Component} from 'react';
import "./App.css"
import whiskey from "./images/whiskey.jpg"
import hazel from "./images/hazel.jpg"
import tubby from "./images/tubby.jpg"
import {Route, Switch, NavLink, Redirect} from "react-router-dom";
import Dog from "./Dog";
import DogList from "./DogList";

class App extends Component {
    static defaultProps = {
        dogs: [
            {
                name: "Whiskey",
                age: 5,
                src: whiskey,
                facts: [
                    "Whiskey loves eating popcorn.",
                    "Whiskey is a terrible guard dog.",
                    "Whiskey wants to cuddle with you!"
                ]
            },
            {
                name: "Hazel",
                age: 3,
                src: hazel,
                facts: [
                    "Hazel has soooo much energy!",
                    "Hazel is highly intelligent.",
                    "Hazel loves people more than dogs."
                ]
            },
            {
                name: "Tubby",
                age: 4,
                src: tubby,
                facts: [
                    "Tubby is not the brightest dog",
                    "Tubby does not like walks or exercise.",
                    "Tubby loves eating food."
                ]
            }
        ]
    }

    render() {
        const getDog = routeProps => {
            let dogProps = this.props.dogs.find(dog => dog.name === routeProps.match.params.name);
            return (<Dog {...dogProps} {...routeProps}/>);
        }

        return (
            <div className={"App"}>
                <nav className={"navbar navbar-expand-lg navbar-light bg-light"}>
                    <div className={"container-fluid"}>
                        <button
                            className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={"collapse navbar-collapse"} id={"navbarSupportedContent"}>
                            <ul className={"navbar-nav me-auto mb-2 mb-lg-0"}>
                                <li className={"nav-item"}>
                                    <NavLink className={"nav-link"} to={"/dogs"}>Home</NavLink>
                                </li>
                                {this.props.dogs.map((dog, idx) =>
                                    <li className={"nav-item"} key={idx}>
                                        <NavLink className={"nav-link"} to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
                                    </li>)}
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className={"container"}>
                    <Switch>
                        <Route exact path={"/dogs"} render={() => <DogList dogs={this.props.dogs}/>}/>
                        <Route exact path={"/dogs/:name"} render={getDog}/>
                        <Redirect to={"/dogs"}/>
                    </Switch>
                </div>
            </div>
        );
    }
}

export default App;