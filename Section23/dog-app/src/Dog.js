import React, {Component} from 'react';

class Dog extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push('/dogs')
    }

    render() {
        return (
            <div className={"row d-flex justify-content-center"}>
                <div className={"col-sm-6"}>
                    <div className={"card mt-3 mb-2"}>
                        <img className={"card-img-top"} src={this.props.src} alt={this.props.name}/>
                        <div className={"card-body"}>
                            <h3 className={"card-title"}>{this.props.name}</h3>
                            <h4>{this.props.age} years old</h4>
                            <ul className={"list-group"}>
                                {this.props.facts.map((fact, idx) => <li
                                    key={idx} className={"list-group-item"}>{fact}</li>)}
                            </ul>
                        </div>
                    </div>
                    <button className={"btn btn-primary mb-1"} onClick={this.handleClick}>Go Back!</button>
                </div>
            </div>
        );
    }
}

export default Dog;