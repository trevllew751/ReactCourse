import React, {Component} from "react";
import "./Pokecard.css"

const padToThree = num => (num > 999 ? num : `00${num}`.slice(-3));

class Pokecard extends Component {
    render() {
        const {id, name, type, base_experience} = this.props;
        return (
            <div className={"Pokecard"}>
                <h3 className={"Pokecard-name"}>{name}</h3>
                <img
                    className={"Pokecard-image"}
                    src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(id)}.png`} alt=""/>
                <p className={"Pokecard-data"}>{`Type: ${type}`}</p>
                <p className={"Pokecard-data"}>{`EXP: ${base_experience}`}</p>
            </div>
        )
    }
}

export default Pokecard;