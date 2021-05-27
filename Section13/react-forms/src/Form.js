import React, {Component} from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {username: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({username: e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        alert(`You typed: ${this.state.username}`);
        this.setState({username: ""});
    }

    render() {
        return (
            <div>
                <h1>Form Demo</h1>
                <form action="" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default Form;