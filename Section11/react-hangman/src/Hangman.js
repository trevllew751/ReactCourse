import React, {Component} from "react";
import "./Hangman.css";
import {randomWord} from "./words";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";

class Hangman extends Component {
    /** by default, allow 6 guesses and use provided gallows images. */
    static defaultProps = {
        maxWrong: 6,
        images: [img0, img1, img2, img3, img4, img5, img6],
        altText: ["empty", "head", "body", "one arm", "two arms", "one leg", "two legs"]
    };

    constructor(props) {
        super(props);
        this.state = {nWrong: 0, guessed: new Set(), answer: randomWord()};
        this.handleGuess = this.handleGuess.bind(this);
        this.restart = this.restart.bind(this)
    }

    /** guessedWord: show current-state of word:
     if guessed letters are {a,p,e}, show "app_e" for "apple"
     */
    guessedWord() {
        return this.state.answer
            .split("")
            .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
    }

    /** handleGuest: handle a guessed letter:
     - add to guessed letters
     - if not in answer, increase number-wrong guesses
     */
    handleGuess(evt) {
        let ltr = evt.target.value;
        this.setState(st => ({
            guessed: st.guessed.add(ltr),
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }));
    }

    restart() {
        this.setState({nWrong: 0, guessed: new Set(), answer: randomWord()});
    }

    /** generateButtons: return array of letter buttons to render */
    generateButtons() {
        return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
            <button
                key={ltr}
                value={ltr}
                onClick={this.handleGuess}
                disabled={this.state.guessed.has(ltr)}
            >
                {ltr}
            </button>
        ));
    }

    /** render: render game */
    render() {
        const lose = this.state.nWrong === this.props.maxWrong;
        const win = this.state.answer === this.guessedWord().join("");
        return (
            <div className="Hangman">
                <h1>Hangman</h1>
                <img src={this.props.images[this.state.nWrong]} alt={this.props.altText[this.state.nWrong]}/>
                <p className="Hangman-numWrong">Number wrong: {this.state.nWrong}</p>
                <p className="Hangman-word">{this.guessedWord()}</p>
                {lose || win
                    ? <div>
                        <p>{lose ? `You Lose! The word was "${this.state.answer}"` : "You Win!"}</p>
                        <button className={"Hangman-restart"} onClick={this.restart}>Restart</button>
                    </div>
                    : <p className="Hangman-btns">{this.generateButtons()}</p>}
            </div>
        );
    }

}

export default Hangman;
