import React, {Component} from 'react';
import {styled} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Button} from "@material-ui/core";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const styles = {
    root: {
        display: "flex"
    },
    navBtns: {

    }
}

class PaletteFormNav extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {handleDrawerOpen, handleSubmit, setPaletteName, open, paletteName, classes} = this.props;
        return (
            <div className={classes.root}>
                <CssBaseline/>
                <AppBar position="fixed" open={open} color={"default"}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{mr: 2, ...(open && {display: 'none'})}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Create a Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <ValidatorForm
                            onSubmit={handleSubmit}>
                            <TextValidator
                                name={"paletteName"}
                                label={"Palette Name"}
                                value={paletteName}
                                onChange={(event) => setPaletteName(event.target.value)}
                                validators={["required", "isPaletteNameUnique"]}
                                errorMessages={["Enter palette name", "Name already in use"]}
                            />
                            <Button
                                variant={"contained"}
                                color={"primary"}
                                type={"submit"}
                            >
                                Save Palette
                            </Button>
                        </ValidatorForm>
                        <Link to={"/"}>
                            <Button variant={"contained"} color={"secondary"}>
                                GO BACK
                            </Button>
                        </Link>
                    </div>
                </AppBar>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteFormNav);