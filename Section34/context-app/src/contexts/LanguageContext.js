import React, {Component} from "react";

const LanguageContext = React.createContext();

class LanguageProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: "english"
        };
        this.changeLanguage = this.changeLanguage.bind(this);
    }

    changeLanguage(e) {
        this.setState({language: e.target.value});
    }

    render() {
        return (
            <LanguageContext.Provider value={{...this.state, changeLanguage: this.changeLanguage}}>
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

const withLanguageContext = Component => props => {
    return (
        <LanguageContext.Consumer>
            {value => <Component languageContext={value} {...props}/>}
        </LanguageContext.Consumer>
    );
}

export {LanguageContext, LanguageProvider, withLanguageContext};