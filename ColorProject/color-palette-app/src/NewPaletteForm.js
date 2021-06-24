import React from 'react';
import {styled} from '@material-ui/core/styles';
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
import {DRAWER_WIDTH} from "./Constants";

const drawerWidth = DRAWER_WIDTH;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: "0",
        height: "calc(100vh - 64px)",
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center !important',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end !important',
}));

const styles = {
    container: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
    },
    buttons: {
        width: "90%"
    },
    button: {
        width: "50%"
    }
}

NewPaletteForm.defaultProps = {
    maxColors: 20
};

function NewPaletteForm(props) {
    const [open, setOpen] = React.useState(false);
    // React Hooks
    const [curColor, setColor] = React.useState({color: "#008080", name: "teal"});
    const [colors, updateColors] = React.useState(props.palettes[0].colors);
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
        const randomColor = allColors[Math.floor(Math.random() * allColors.length)];
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
                />
            </Main>
        </Box>
    );
}

export default withStyles(styles)(NewPaletteForm);