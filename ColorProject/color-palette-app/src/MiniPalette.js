import React from 'react';
import {withStyles} from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyles";
import DeleteIcon from "@material-ui/icons/Delete";

const MiniPalette = React.memo(props => {
    const {classes, paletteName, emoji, colors, id, openDialog, handleClick}  = props;
    const miniColorBoxes = colors.map(color => (
        <div className={classes.miniColor} style={{backgroundColor: color.color}} key={color.name}/>
    ))

    const handleDelete = event => {
        event.stopPropagation();
        openDialog(id);
    }

    return (
        <div className={classes.root} onClick={() => handleClick(id)}>
            <div className={classes.delete}>
                <DeleteIcon
                    className={classes.deleteIcon}
                    style={{transition: "all 0.3s ease-in-out"}}
                    onClick={handleDelete}
                />
            </div>
            <div className={classes.colors}>
                {miniColorBoxes}
            </div>
            <h5 className={classes.title}>{paletteName} <span className={classes.emoji}>{emoji}</span></h5>
        </div>
    );
});

export default withStyles(styles)(MiniPalette);