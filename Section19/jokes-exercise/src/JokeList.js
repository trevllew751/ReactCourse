import React, {Component} from 'react';
import Joke from "./Joke";
import axios from "axios";
import "./JokeList.css"

class JokeList extends Component {
    static defaultProps = {
        numJokes: 10
    }

    constructor(props) {
        super(props);
        this.state = {
            jokes: JSON.parse(window.localStorage.getItem("jokes") || "[]"),
            loading: false
        }
        this.seenJokes = new Set(this.state.jokes.map(joke => joke.joke));
        this.updateLikes = this.updateLikes.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if (this.state.jokes.length === 0) {
            this.getJokes();
        }
    }

    async getJokes() {
        try {
            const jokes = [];
            const headers = {"Accept": "application/json"};
            while (jokes.length < this.props.numJokes) {
                let response = await axios.get(`https://icanhazdadjoke.com/`, {headers});
                let {joke, id} = response.data;
                if (!this.seenJokes.has(joke)) {
                    jokes.push({joke, id, likes: 0});
                } else {
                    console.log("FOUND DUPLICATE");
                    console.log(joke);
                }
            }
            this.setState(state => ({
                loading: false,
                jokes: [...state.jokes, ...jokes]
            }), () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)));
        } catch (e) {
            alert(e);
            this.setState({loading: false});
        }
    }

    updateLikes(id, isLike) {
        let jokes = this.state.jokes;
        for (let i = 0; i < jokes.length; i++) {
            if (jokes[i].id === id) {
                jokes[i].likes += (isLike ? 1 : -1);
            }
        }
        this.setState({jokes}, () => window.localStorage.setItem("jokes", JSON.stringify(this.state.jokes)));
    }

    handleClick() {
        this.setState({loading: true}, this.getJokes);
    }

    render() {
        if (this.state.loading) {
            return (
                <div className={"JokeList-spinner"}>
                    <div className={"spinner"}><i className="far fa-8x fa-laugh fa-spin"/></div>
                    <h1 className={"JokeList-title"}>Loading...</h1>
                </div>
            )
        }
        let jokes = this.state.jokes.sort((a, b) => b.likes - a.likes);
        return (
            <div className={"JokeList"}>
                <div className={"JokeList-sidebar"}>
                    <h1 className={"JokeList-title"}>Dad Jokes!</h1>
                    <img
                        src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
                        alt={"Laughing emoji"}/>
                    <button className={"JokeList-getmore"} onClick={this.handleClick}>Fetch Jokes</button>
                </div>
                <div className={"JokeList-jokes"}>
                    {jokes.map(joke => {
                        return <Joke
                            joke={joke.joke}
                            likes={joke.likes}
                            updateLikes={this.updateLikes}
                            id={joke.id}
                            key={joke.id}
                        />
                    })}</div>
            </div>
        );
    }
}

export default JokeList;