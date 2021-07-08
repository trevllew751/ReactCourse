import {createTheme} from "@material-ui/core";

const theme = createTheme();

const styles = () => ({
    root: {
        width: "100%",
        marginBottom: 0
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: "rgba(255,255,255,0.15)",
        "&:hover": {
            backgroundColor: "rgba(255,255,255,0.25)",
        },
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(1),
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing(9),
        height: "100%",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "inherit",
        width: "100%"
    },
    inputInput: {
        paddingTop: theme.spacing(1),
        paddingRight: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingLeft: theme.spacing(10),
        width: "100%",
        // transition: theme.transitions.create("width", {easing: theme.transitions.easing.easeInOut}),
        [theme.breakpoints.up("sm")]: {
            width: "120px",
            "&:focus": {
                width: "300px"
            }
        }
    }
})

export default styles;

