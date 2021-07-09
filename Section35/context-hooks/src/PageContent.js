import React from 'react';
import {ThemeContext} from "./contexts/ThemeContext";

function PageContent(props) {
    const {isDarkMode} = React.useContext(ThemeContext);

    const styles = {
        backgroundColor: isDarkMode ? "black" : "white",
        height: "100vh",
        width: "100vw"
    };

    return (
        <div style={styles}>
            {props.children}
        </div>
    );
}

export default PageContent;