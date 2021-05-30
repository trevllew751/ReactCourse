import React, {Component} from 'react';
import axios from "axios";

class GithubUserInfo extends Component {
    constructor(props) {
        console.log("In constructor")
        super(props);
        this.state = {
            imageUrl: "",
            name: ""
        };
    }


    async componentDidMount() {
        console.log("In component did mount")
        const url = `https://api.github.com/users/${this.props.username}`
        const response = await axios.get(url)
        this.setState({imageUrl: response.data.avatar_url, name: response.data.name})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Inside component did update")
    }

    render() {
        console.log("In render")
        return (
            <div>
                <h1>Github User: {this.state.name}</h1>
                <img src={this.state.imageUrl} alt=""/>
            </div>
        );
    }
}

export default GithubUserInfo;