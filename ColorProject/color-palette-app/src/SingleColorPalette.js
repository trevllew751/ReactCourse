import React, {Component} from 'react';
import ColorBox from "./ColorBox";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import {Link} from "react-router-dom";

class SingleColorPalette extends Component {
    constructor(props) {
        super(props);
        this.state = {format: "hex"};
        this._shades = this.getShades(this.props.palette, this.props.colorId);
        this.changeFormat = this.changeFormat.bind(this);
    }

    getShades(palette, colorToFilterBy) {
        // return all shades of given color
        let shades = [];
        let allColors = palette.colors;
        for (let key in allColors) {
            shades = shades.concat(
                allColors[key].filter(color => color.id === colorToFilterBy)
            )
        }
        return shades.slice(1);
    }

    changeFormat(val) {
        this.setState({format: val});
    }

    render() {
        const {format} = this.state;
        const {paletteName, emoji, id} = this.props.palette
        const colorBoxes = this._shades.map(color => <ColorBox
            key={color.name} name={color.name} background={color[format]} showingFullPalette={false}/>)
        return (
            <div className={"SingleColorPalette Palette"}>
                <Navbar handleChange={this.changeFormat} isSingleColor={true}/>
                <div className={"Palette-colors"}>
                    {colorBoxes}
                    <div className={"go-back ColorBox"}>
                        <Link to={`/palette/${id}`} className={"back-button"}>Go Back</Link>
                    </div>
                </div>
                <PaletteFooter paletteName={paletteName} emoji={emoji}/>
            </div>
        );
    }
}

export default SingleColorPalette;