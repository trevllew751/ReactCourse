import React, {Component} from 'react';

class Meal extends Component {
    render() {
        const {foodName, drinkName} = this.props.match.params;
        const foodUrl = `https://source.unsplash.com/1600x900/?${foodName}`
        const drinkUrl = `https://source.unsplash.com/1600x900/?${drinkName}`
        return (
            <div>
                <h1>I am a meal: {foodName} and {drinkName}</h1>
                <img src={foodUrl} alt={foodName}/>
                <img src={drinkUrl} alt={drinkName}/>
            </div>
        );
    }
}

export default Meal;