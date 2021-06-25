import React, {Component} from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Link} from "react-router-dom";
import {withStyles} from "@material-ui/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import {blue, red} from "@material-ui/core/colors";
import styles from "./styles/PaletteListStyles";
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openDeleteDialog: false,
            deleteId: ""
        };
        this.openDialog = this.openDialog.bind(this);
        this.closeDialog = this.closeDialog.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.goToPalette = this.goToPalette.bind(this);
    }

    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    openDialog(id) {
        this.setState({openDeleteDialog: true, deleteId: id});
    }

    closeDialog() {
        this.setState({openDeleteDialog: false});
    }

    handleDelete() {
        this.props.deletePalette(this.state.deleteId);
        this.closeDialog();
        this.setState({deleteId: ""});
    }

    render() {
        const {palettes, classes, deletePalette} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1 className={classes.header}>Palette List</h1>
                        <Link to={"/palette/new"}>Create New Palette</Link>
                    </nav>
                    <TransitionGroup className={classes.palettes}>
                        {palettes.map(p =>
                            <CSSTransition key={p.id} timeout={500} classNames={"fade"}>
                                <MiniPalette
                                    {...p}
                                    key={p.paletteName}
                                    handleClick={this.goToPalette}
                                    deletePalette={deletePalette}
                                    openDialog={this.openDialog}
                                />
                            </CSSTransition>)}
                    </TransitionGroup>
                </div>
                <Dialog open={this.state.openDeleteDialog} aria-labelledby={"delete-dialog-title"} onClose={this.closeDialog}>
                    <DialogTitle id={"delete-dialog-title"}>Delete this Palette?</DialogTitle>
                    <List>
                        <ListItem button onClick={this.handleDelete}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: blue[100], color: blue[600]}}>
                                    <CheckCircleIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Delete</ListItemText>
                        </ListItem>
                        <ListItem button onClick={this.closeDialog}>
                            <ListItemAvatar>
                                <Avatar style={{backgroundColor: red[100], color: red[600]}}>
                                    <CancelIcon/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText>Cancel</ListItemText>
                        </ListItem>
                    </List>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);