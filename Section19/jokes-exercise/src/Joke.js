import React, {Component} from 'react';
import "./Joke.css"

class Joke extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    getColor() {
        if (this.props.likes >= 15) {
            return "#4CAF50";
        } else if (this.props.likes >= 12) {
            return "#8BC34A";
        } else if (this.props.likes >= 9) {
            return "#CDDC39";
        } else if (this.props.likes >= 6) {
            return "#FFEB3B";
        } else if (this.props.likes >= 3) {
            return "#FFC107";
        } else if (this.props.likes >= 0) {
            return "#FF9800";
        } else {
            return "#f44336";
        }
    }

    getEmoji() {
        if (this.props.likes >= 15) {
            return "em em-rolling_on_the_floor_laughing";
        } else if (this.props.likes >= 12) {
            return "em em-laughing";
        } else if (this.props.likes >= 9) {
            return "em em-smiley";
        } else if (this.props.likes >= 6) {
            return "em em-slightly_smiling_face";
        } else if (this.props.likes >= 3) {
            return "em em-neutral_face";
        } else if (this.props.likes >= 0) {
            return "em em-confused";
        } else {
            return "em em-angry";
        }
    }

    handleClick(e) {
        let like = e.target.className === "fas fa-arrow-up";
        this.props.updateLikes(this.props.id, like);
    }

    render() {
        return (
            <div className={"Joke"}>
                <div className={"Joke-buttons"}>
                    <i onClick={this.handleClick} className={"fas fa-arrow-up"}/>
                    <span className={"Joke-likes"} style={{borderColor: this.getColor()}}>{this.props.likes}</span>
                    <i onClick={this.handleClick} className={"fas fa-arrow-down"}/>
                </div>
                <div className={"Joke-text"}>{this.props.joke}</div>
                <div className="Joke-smiley"><i className={this.getEmoji()}/></div>
            </div>
        );
    }
}

export default Joke;