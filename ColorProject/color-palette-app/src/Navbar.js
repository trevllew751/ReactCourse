import React, {Component} from 'react';
import Slider from "rc-slider";
import {IconButton, MenuItem, Select, Snackbar} from "@material-ui/core";
import {Close} from "@material-ui/icons";
import {Link} from "react-router-dom"
import "rc-slider/assets/index.css";
import "./Navbar.css"


class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        };
        this.handleFormatChange = this.handleFormatChange.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);
    }

    handleFormatChange(e) {
        this.setState({format: e.target.value, open: true});
        this.props.handleChange(e.target.value);
    }

    closeSnackbar() {
        this.setState({open: false})
    }

    render() {
        const {level, changeLevel} = this.props;
        const {format} = this.state;
        return (
            <header className="Navbar">
                <div className="logo">
                    <Link to={"/"}>ReactColorPicker</Link>
                </div>
                <span>Level: {level}</span>
                <div className={"slider-container"}>
                    <div className={"slider"}>
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            trackStyle={{backgroundColor: "transparent"}}
                            railStyle={{height: "8px"}}
                            handleStyle={{
                                backgroundColor: 'green',
                                outline: 'none',
                                border: '2px solid green',
                                boxShadow: 'none',
                                width: '13px',
                                height: '13px',
                                marginLeft: '-7px',
                                marginTop: '-3px'
                            }}
                            onChange={changeLevel}/>
                    </div>
                </div>
                <div className="select-container">
                    <Select onChange={this.handleFormatChange} value={format}>
                        <MenuItem value={"hex"}>HEX - #ffffff</MenuItem>
                        <MenuItem value={"rgb"}>RGB - rgb(255,255,255)</MenuItem>
                        <MenuItem value={"rgba"}>RGBA - rgba(255,255,255,1)</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{vertical: "bottom", horizontal: "left"}}
                    open={this.state.open}
                    autoHideDuration={3000}
                    message={<span id={"message-id"}>Format Changed To {format.toUpperCase()}</span>}
                    ContentProps={{"aria-describedby": "message-id"}}
                    onClose={this.closeSnackbar}
                    action={
                        <IconButton onClick={this.closeSnackbar} color={"inherit"} key={"close"} aria-label={"close"}>
                            <Close/>
                        </IconButton>
                    }
                />
            </header>
        );
    }
}

export default Navbar;