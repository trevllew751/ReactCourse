import {styled} from "@material-ui/core/styles";
import MuiAppBar from "@material-ui/core/AppBar";
import sizes from "./Sizes";
import {DRAWER_WIDTH} from "../Constants";

const drawerWidth = DRAWER_WIDTH;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const styles = {
    root: {
        display: "flex"
    },
    navButtons: {
        marginRight: "1rem",
        "& a": {
            textDecoration: "none"
        },
        "& .MuiButton-root": {
            margin: "0 0.5rem"
        },
        [sizes.down("xs")]: {
            marginRight: "0.5rem",
            "& .MuiButton-root": {
                margin: "0 0.2rem",
                padding: "0.3rem"
            }
        }
    }
};

export {styles, AppBar};