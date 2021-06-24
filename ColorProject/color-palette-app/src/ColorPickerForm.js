import React, {Component} from 'react';
import {ChromePicker} from "react-color";
import {Button} from "@material-ui/core";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {withStyles} from "@material-ui/styles";

const styles = {
    picker: {
        width: "100% !important",
        marginTop: "2rem"
    },
    addColor: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem",
        fontSize: "2rem"
    },
    colorNameInput: {
        width: "100%",
        height: "70px"
    }
}

class ColorPickerForm extends Component {
    render() {
        const {curColor, setColor, handleAdd, colorName, setColorName, paletteIsFull, classes} = this.props;
        return (
            <div style={{width: "90%"}}>
                <ChromePicker
                    color={curColor.hex || curColor.color}
                    onChangeComplete={color => setColor(color)}
                    className={classes.picker}
                />
                <ValidatorForm
                    onSubmit={handleAdd}>
                    <TextValidator
                        name={"colorName"}
                        value={colorName}
                        onChange={(event) => setColorName(event.target.value)}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["This field is required!", "Color name already in use!", "Color already in use!"]}
                        className={classes.colorNameInput}
                        placeholder={"Color Name"}
                        margin={"normal"}
                    />
                    <Button
                        variant={"contained"}
                        style={{background: paletteIsFull ? "grey" : (curColor.hex || curColor.color)}}
                        type={"submit"}
                        disabled={paletteIsFull}
                        className={classes.addColor}
                    >
                        {paletteIsFull ? "Palette Full" : "Add Color"}
                    </Button>
                </ValidatorForm>
            </div>
        );
    }
}

export default withStyles(styles)(ColorPickerForm);