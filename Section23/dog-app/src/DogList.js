import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {v4 as uuid} from "uuid";

class DogList extends Component {
    render() {
        return (
            <div className={"DogList"}>
                <h1 className={"display-1 text-center"}>Dog App!</h1>
                <div className={"row"}>
                    {this.props.dogs.map(d => (
                        <div key={uuid()} className={"col-sm-6 col-md-4"}>
                            <img className={"img-fluid"} src={d.src} alt={d.name}/>
                            <h2>Name: {d.name}</h2>
                            <Link to={`/dogs/${d.name}`}>See More!</Link>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default DogList;