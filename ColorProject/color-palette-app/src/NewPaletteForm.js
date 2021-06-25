import React from 'react';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Button} from "@material-ui/core";
import DraggableColorList from "./DraggableColorList";
import {ValidatorForm} from "react-material-ui-form-validator";
import {arrayMove} from "react-sortable-hoc";
import PaletteFormNav from "./PaletteFormNav";
import ColorPickerForm from "./ColorPickerForm";
import {withStyles} from "@material-ui/styles";
import {Main, DrawerHeader, styles} from "./styles/NewPaletteFormStyles";
import {DRAWER_WIDTH} from "./Constants";
import seedColors from "./seedColors";
const drawerWidth = DRAWER_WIDTH;

NewPaletteForm.defaultProps = {
    maxColors: 20
};

function NewPaletteForm(props) {
    const [open, setOpen] = React.useState(false);
    // React Hooks
    const [curColor, setColor] = React.useState({color: "#008080", name: "teal"});
    const [colors, updateColors] = React.useState(seedColors[0].colors);
    const [colorName, setColorName] = React.useState("");
    const [paletteName, setPaletteName] = React.useState("");

    const {classes} = props;

    React.useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", value => {
            return colors.every(
                ({name}) => name.toLowerCase() !== value.toLowerCase()
            );
        });
    });

    React.useEffect(() => {
        ValidatorForm.addValidationRule("isColorUnique", () => {
            return colors.every(
                ({color}) => color !== curColor.color && color !== curColor.hex
            );
        });
    });

    React.useEffect(() => {
        ValidatorForm.addValidationRule("isPaletteNameUnique", value => {
            return props.palettes.every(
                ({paletteName}) => paletteName.toLowerCase() !== value.toLowerCase()
            );
        });
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleAdd = () => updateColors(prevColors => {
        const newColor = {color: curColor.hex || curColor.color, name: colorName};
        setColorName("");
        return [...prevColors, newColor];
    });

    const handleSubmit = newPalette => {
        newPalette.id = newPalette.paletteName.toLowerCase().replace(/ /g, "-");
        newPalette.colors = colors;
        props.savePalette(newPalette);
        props.history.push("/");
    }

    const handleRemove = (colorName) => updateColors(prevColors => {
        return prevColors.filter((color) => color.name !== colorName)
    })

    const onSortEnd = ({oldIndex, newIndex}) => updateColors(prevColors => {
        return arrayMove(prevColors, oldIndex, newIndex)
    })

    const handleClear = () => updateColors([]);

    const addRandom = () => updateColors(prevColors => {
        const allColors = props.palettes.map(p => p.colors).flat();
        let rand;
        let randomColor;
        let isDuplicateColor = true;
        while (isDuplicateColor) {
            rand = Math.floor(Math.random() * allColors.length);
            randomColor = allColors[rand];
            isDuplicateColor = colors.some(color => color.name === randomColor.name);
        }
        return [...prevColors, randomColor];
    });

    const paletteIsFull = colors.length >= props.maxColors;

    return (
        <Box sx={{display: 'flex'}}>
            <PaletteFormNav
                handleDrawerOpen={handleDrawerOpen}
                handleSubmit={handleSubmit}
                setPaletteName={setPaletteName}
                open={open}
                paletteName={paletteName}
            />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box'
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <div className={classes.container}>
                    <Typography variant={"h4"} gutterBottom>Design Your Palette</Typography>
                    <div className={classes.buttons}>
                        <Button
                            variant={"contained"}
                            color={"secondary"}
                            onClick={handleClear}
                            className={classes.button}
                        >
                            Clear Palette
                        </Button>
                        <Button
                            variant={"contained"}
                            color={"primary"}
                            onClick={addRandom}
                            disabled={paletteIsFull}
                            className={classes.button}
                        >
                            Random Color
                        </Button>
                    </div>
                    <ColorPickerForm
                        curColor={curColor}
                        setColor={setColor}
                        handleAdd={handleAdd}
                        colorName={colorName}
                        setColorName={setColorName}
                        paletteIsFull={paletteIsFull}
                    />
                </div>
            </Drawer>
            <Main open={open}>
                <DrawerHeader/>
                <DraggableColorList
                    colors={colors}
                    removeColor={handleRemove}
                    axis={"xy"}
                    onSortEnd={onSortEnd}
                    distance={10}
                />
            </Main>
        </Box>
    );
}

export default withStyles(styles)(NewPaletteForm);