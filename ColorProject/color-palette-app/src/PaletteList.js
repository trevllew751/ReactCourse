import React, {Component} from 'react';
import MiniPalette from "./MiniPalette";
import {withStyles} from "@material-ui/styles";
import styles from "./styles/PaletteListStyles";
import {Link} from "react-router-dom";

class PaletteList extends Component {
    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    render() {
        const {palettes, classes, deletePalette} = this.props;
        return (
            <div className={classes.root}>
                <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>Palette List</h1>
                        <Link to={"/palette/new"}>Create New Palette</Link>
                    </nav>
                    <div className={classes.palettes}>{palettes.map(p =>
                        <MiniPalette {...p} key={p.paletteName} handleClick={() => this.goToPalette(p.id)}
                                     deletePalette={deletePalette}/>)}
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(PaletteList);