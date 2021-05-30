import React, {Component} from 'react';
import RuleRow from './RuleRow';
import './ScoreTable.css';
import {
    ones,
    twos,
    threes,
    fours,
    fives,
    sixes,
    threeOfKind,
    fourOfKind,
    fullHouse,
    smallStraight,
    largeStraight,
    yahtzee,
    chance
} from './Rules';


class ScoreTable extends Component {
    static defaultProps = {
        ones: "1 point per 1",
        twos: "2 points per 2",
        threes: "3 points per 3",
        fours: "4 points per 4",
        fives: "5 points per 5",
        sixes: "6 points per 6",
        threeOfKind: "Sum all dice if 3 are the same",
        fourOfKind: "Sum all dice if 4 are the same",
        fullHouse: "25 points for full house",
        smallStraight: "30 points for small straight",
        largeStraight: "40 points for small straight",
        yahtzee: "50 points for yahtzee",
        chance: "Sum of all dice"
    }

    calculateTotal() {
        let scores = Object.values(this.props.scores);
        // if (scores.every(s => s === undefined)) {
        //     return 0;
        // }
        let reducer = (accumulator, currentValue) => accumulator + (currentValue ? currentValue : 0);
        return scores.reduce(reducer, 0);
    }

    render() {
        const {scores, doScore} = this.props;
        const score = this.calculateTotal();
        return (
            <div className="ScoreTable">
                <section className="ScoreTable-section">
                    <h2>Upper</h2>
                    <table cellSpacing="0">
                        <tbody>
                        <RuleRow
                            name="Ones" desc={this.props.ones} score={scores.ones}
                            doScore={evt => doScore("ones", ones.evalRoll)}/>
                        <RuleRow
                            name="Twos" desc={this.props.twos} score={scores.twos}
                            doScore={evt => doScore("twos", twos.evalRoll)}/>
                        <RuleRow
                            name="Threes" desc={this.props.threes} score={scores.threes}
                            doScore={evt => doScore("threes", threes.evalRoll)}/>
                        <RuleRow
                            name="Fours" desc={this.props.fours} score={scores.fours}
                            doScore={evt => doScore("fours", fours.evalRoll)}/>
                        <RuleRow
                            name="Fives" desc={this.props.fives} score={scores.fives}
                            doScore={evt => doScore("fives", fives.evalRoll)}/>
                        <RuleRow
                            name="Sixes" desc={this.props.sixes} score={scores.sixes}
                            doScore={evt => doScore("sixes", sixes.evalRoll)}/>
                        </tbody>
                    </table>
                </section>
                <section className="ScoreTable-section ScoreTable-section-lower">
                    <h2>Lower</h2>
                    <table cellSpacing="0">
                        <tbody>
                        <RuleRow
                            name="Three of Kind" desc={this.props.threeOfKind} score={scores.threeOfKind}
                            doScore={evt => doScore("threeOfKind", threeOfKind.evalRoll)}/>
                        <RuleRow
                            name="Four of Kind" desc={this.props.fourOfKind} score={scores.fourOfKind}
                            doScore={evt => doScore("fourOfKind", fourOfKind.evalRoll)}/>
                        <RuleRow
                            name="Full House" desc={this.props.fullHouse} score={scores.fullHouse}
                            doScore={evt => doScore("fullHouse", fullHouse.evalRoll)}/>
                        <RuleRow
                            name="Small Straight" desc={this.props.smallStraight} score={scores.smallStraight}
                            doScore={evt => doScore("smallStraight", smallStraight.evalRoll)}/>
                        <RuleRow
                            name="Large Straight" desc={this.props.largeStraight} score={scores.largeStraight}
                            doScore={evt => doScore("largeStraight", largeStraight.evalRoll)}/>
                        <RuleRow
                            name="Yahtzee" desc={this.props.yahtzee} score={scores.yahtzee}
                            doScore={evt => doScore("yahtzee", yahtzee.evalRoll)}/>
                        <RuleRow
                            name="Chance" desc={this.props.chance} score={scores.chance}
                            doScore={evt => doScore("chance", chance.evalRoll)}/>
                        </tbody>
                    </table>
                </section>
                <h2>Total Score: {score}</h2>
            </div>
        )
    }
}

export default ScoreTable;