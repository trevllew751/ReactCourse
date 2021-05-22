import React, {Component} from "react";
import Pokecard from "./Pokecard"
import "./Pokedex.css"

class Pokedex extends Component {
    render() {
        let title = this.props.isWinner ? "Pokedex-win" : "Pokedex-lose";
        return (
            <div className={"Pokedex"}>
                <div className={"Pokedex-cards"}>
                    {this.props.pokemon.map((p) => (
                        <Pokecard id={p.id} name={p.name} type={p.type} base_experience={p.base_experience}/>
                    ))}
                </div>
                <h2 className={"Pokedex-total"}>Deck Total: {this.props.total}</h2>
                <h2 className={title}>{this.props.isWinner ? "Winner!" : "Loser!"}</h2>
            </div>
        )
    }
}

export default Pokedex;