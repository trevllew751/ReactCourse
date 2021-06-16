import React from 'react';
import {styled, useTheme} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {ChromePicker} from "react-color";
import {Button, TextareaAutosize} from "@material-ui/core";
import DraggableColorBox from "./DraggableColorBox";
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";

const drawerWidth = 400;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
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

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function NewPaletteForm() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    // React Hooks
    const [curColor, setColor] = React.useState({color: "teal", name: "teal"});
    const [colors, addColor] = React.useState([]);
    const [newName, saveName] = React.useState("");

    React.useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", value => {
            return colors.every(
                ({name}) => name.toLowerCase() !== value.toLowerCase()
            );
        });
    });

    React.useEffect(() => {
        ValidatorForm.addValidationRule("isColorUnique", value => {
            return colors.every(
                ({color}) => color !== curColor.color
            );
        });
    });

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
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
                        Persistent drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
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
                <Typography variant={"h4"}>Design Your Palette</Typography>
                <div>
                    <Button variant={"contained"} color={"secondary"}>Clear Palette</Button>
                    <Button variant={"contained"} color={"primary"}>Random Color</Button>
                </div>
                <ChromePicker color={curColor.hex || curColor.color} onChangeComplete={color => setColor(color)}/>
                <ValidatorForm
                    onSubmit={() => addColor(prevColors => {
                        const newColor = {color: curColor.hex || curColor.color, name: newName};
                        saveName("");
                        return [...prevColors, newColor];
                    })}>
                    <TextValidator
                        name={"colorName"}
                        value={newName}
                        onChange={event => saveName(event.target.value)}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["This field is required!", "Color name already in use!", "Color already in use!"]}
                    />
                    <Button
                        variant={"contained"}
                        style={{background: curColor.hex || curColor.color}}
                        // onClick={() => addColor(prevColors => [...prevColors, curColor.hex || curColor])}
                        type={"submit"}
                    >
                        Add Color
                    </Button>
                </ValidatorForm>
            </Drawer>
            <Main open={open}>
                <DrawerHeader/>
                {colors.map(color => <DraggableColorBox color={color.color} name={color.name}/>)}
            </Main>
        </Box>
    );
}