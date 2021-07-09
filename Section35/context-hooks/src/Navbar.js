import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, InputBase, Switch} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import {Search} from "@material-ui/icons";
import styles from "./styles/NavbarStyles";
import {ThemeContext} from "./contexts/ThemeContext";
import {LanguageContext} from "./contexts/LanguageContext";

function Navbar(props) {
    const content = {
        english: {
            search: "Search",
            flag: "🇬🇧"
        },
        french: {
            search: "Chercher",
            flag: "🇫🇷"
        },
        spanish: {
            search: "Buscar",
            flag: "🇪🇸"
        }
    };
    const {classes} = props;
    const {language} = React.useContext(LanguageContext);
    const {search, flag} = content[language];
    const {isDarkMode, toggleTheme} = React.useContext(ThemeContext);

    return (
        <div className={classes.root}>
            <AppBar position={"static"} color={isDarkMode ? "default" : "primary"}>
                <Toolbar>
                    <IconButton className={classes.menuButton}>
                        <span>{flag}</span>
                    </IconButton>
                    <Typography className={classes.title} variant={"h6"} color={"inherit"}>
                        App Title
                    </Typography>
                    <Switch onChange={toggleTheme}/>
                    <div className={classes.grow}/>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search/>
                        </div>
                        <InputBase
                            placeholder={`${search}...`} classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput
                        }}/>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(Navbar);