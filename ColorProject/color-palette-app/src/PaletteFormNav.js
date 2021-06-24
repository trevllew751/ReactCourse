import React, {Component} from 'react';
import {styled} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import {DRAWER_WIDTH} from "./Constants";
import sizes from "./styles/Sizes";

const drawerWidth = DRAWER_WIDTH;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
    navButtons: {
        marginRight: "1rem",
        "& a": {
            textDecoration: "none"
        },
        "& .MuiButton-root": {
            margin: "0 0.5rem"
        },
        [sizes.down("xs")]: {
            marginRight: "0.5rem",
            "& .MuiButton-root": {
                margin: "0 0.2rem",
                padding: "0.3rem"
            }
        }
    }
}

class PaletteFormNav extends Component {
    constructor(props) {
        super(props);
        this.state = {isFormOpen: false};
        this.showForm = this.showForm.bind(this);
        this.hideForm = this.hideForm.bind(this);
    }

    showForm() {
        this.setState({isFormOpen: true});
    }

    hideForm() {
        this.setState({isFormOpen: false});
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
                    <div className={classes.navButtons}>
                        <Link to={"/"}>
                            <Button variant={"contained"} color={"secondary"} className={classes.button}>
                                GO BACK
                            </Button>
                        </Link>
                        <Button variant={"contained"} onClick={this.showForm} className={classes.button}>Save</Button>
                    </div>
                </AppBar>
                {this.state.isFormOpen && (<PaletteMetaForm
                    handleSubmit={handleSubmit}
                    setPaletteName={setPaletteName}
                    paletteName={paletteName}
                    hideForm={this.hideForm}
                />)}
            </div>
        );
    }
}

export default withStyles(styles)(PaletteFormNav);