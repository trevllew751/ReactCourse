import React, {Component} from 'react';
import './RuleRow.css'

class RuleRow extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.score === undefined) {
            this.props.doScore();
        }
    }

    render() {
        let clicked = this.props.score || this.props.score === 0;
        let active = clicked ? "disabled" : "active";
        return (
            <tr className={`RuleRow RuleRow-${active}`} onClick={this.handleClick}>
                <td className="RuleRow-name">{this.props.name}</td>
                <td className="RuleRow-score">{clicked ? this.props.score : this.props.desc}</td>
            </tr>
        )
    }
}

export default RuleRow;