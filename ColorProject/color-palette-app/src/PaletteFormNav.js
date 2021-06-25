import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";
import PaletteMetaForm from "./PaletteMetaForm";
import {styles, AppBar} from "./styles/PaletteFormNavStyles";


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