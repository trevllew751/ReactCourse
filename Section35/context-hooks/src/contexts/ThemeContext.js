import React from "react";

const ThemeContext = React.createContext();

function ThemeProvider(props) {
    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <ThemeContext.Provider value={{isDarkMode, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeProvider, ThemeContext};