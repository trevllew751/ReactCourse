import React, {Component} from 'react';

class MultipleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {username: "", email: "", password: ""}
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
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
                        name={"username"}
                        onChange={this.handleChange}/>
                    <input
                        type="email"
                        value={this.state.email}
                        name={"email"}
                        onChange={this.handleChange}/>
                    <input
                        type="password"
                        value={this.state.password}
                        name={"password"}
                        onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}

export default MultipleForm;