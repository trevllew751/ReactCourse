import React, {Component} from "react";
import Pokedex from "./Pokedex";
import "./Pokegame.css"

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}]
    };

    render() {
        const deck1 = [];
        for (let i = 0; i < 4; i++) {
            const choice = Math.floor(Math.random() * this.props.pokemon.length);
            deck1.push(this.props.pokemon.splice(choice, 1)[0]);
        }
        const deck2 = this.props.pokemon;
        const deck1Total = deck1.reduce((total, pokemon) => total + pokemon.base_experience, 0);
        const deck2Total = deck2.reduce((total, pokemon) => total + pokemon.base_experience, 0);
        return (
            <div className={"Pokegame"}>
                <h1 className={"Pokegame-title"}>Pokegame!</h1>
                <h2 className={"Pokegame-deck"}>Deck 1</h2>
                <Pokedex pokemon={deck1} total={deck1Total} isWinner={deck1Total > deck2Total}/>
                <h2 className={"Pokegame-deck"}>Deck 2</h2>
                <Pokedex pokemon={deck2} total={deck2Total} isWinner={deck2Total > deck1Total}/>
            </div>
        );
    }
}

export default Pokegame;