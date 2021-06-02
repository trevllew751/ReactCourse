import React, {Component} from 'react';
import Card from "./Card";
import axios from "axios";
import "./Deck.css"

class Deck extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deckId: "",
            cards: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    async componentDidMount() {
        const response = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle")
        this.setState({deckId: response.data.deck_id})
    }

    handleClick() {
        this.getCard();
    }

    async getCard() {
        const response = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`)
        if (response.data.success) {
            const img = response.data.cards[0].image;
            const desc = response.data.cards[0].code;
            this.setState(state => ({
                cards: [...state.cards, {cardImg: img, cardDesc: desc}]
            }))
        } else {
            alert("Out of cards!")
        }
    }

    render() {
        return (
            <div className={"Deck"}>
                <h1 className={"Deck-title"}>Deck of Cards!</h1>
                <button onClick={this.handleClick} className={"Deck-btn"}>Get Card!</button>
                <div className={"Deck-cards"}>
                    {this.state.cards.map((card, idx) => {
                    return <Card
                        img={this.state.cards[idx].cardImg}
                        desc={this.state.cards[idx].cardDesc}
                        key={this.state.cards[idx].cardDesc}
                    />
                })}</div>
            </div>
        );
    }
}

export default Deck;