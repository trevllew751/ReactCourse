import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {Picker} from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";

export default function PaletteMetaForm(props) {

    const [stage, setStage] = React.useState("form");

    const {handleSubmit, paletteName, setPaletteName, hideForm} = props;

    const savePalette = emoji => {
        const newPalette = {
            paletteName,
            emoji: emoji.native
        }
        handleSubmit(newPalette);
        setStage("");
    }

    return (
        <div>
            <Dialog open={stage === "emoji"} onClose={hideForm}>
                <DialogTitle id="form-dialog-title">Pick a Palette Emoji</DialogTitle>
                <Picker onSelect={savePalette} title={"Pick a Palette Emoji"}/>
            </Dialog>
            <Dialog open={stage === "form"} onClose={hideForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
                <ValidatorForm onSubmit={() => setStage("emoji")}>
                    <DialogContent>
                        <DialogContentText>
                            Enter a name for your new palette. Palette names must be unique.
                        </DialogContentText>
                        <TextValidator
                            name={"paletteName"}
                            label={"Palette Name"}
                            value={paletteName}
                            fullWidth
                            margin={"normal"}
                            onChange={(event) => setPaletteName(event.target.value)}
                            validators={["required", "isPaletteNameUnique"]}
                            errorMessages={["Enter palette name", "Name already in use"]}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={hideForm}>Cancel</Button>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            type={"submit"}
                        >
                            Save Palette
                        </Button>
                    </DialogActions>
                </ValidatorForm>
            </Dialog>
        </div>
    );
}