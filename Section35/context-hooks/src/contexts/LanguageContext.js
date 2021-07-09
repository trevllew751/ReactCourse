import React from "react";

const LanguageContext = React.createContext();

function LanguageProvider(props) {
    const [language, setLanguage] = React.useState("english");

    const changeLanguage = e => {
        setLanguage(e.target.value);
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {props.children}
        </LanguageContext.Provider>
    )
}

export {LanguageContext, LanguageProvider};