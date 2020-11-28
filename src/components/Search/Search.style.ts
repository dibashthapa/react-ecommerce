import { createStyles, Theme } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(25),
      width: "100%",
      [theme.breakpoints.down("sm")]: {
        marginLeft: theme.spacing(3),
        marginBottom: theme.spacing(2),
        width: "100%",
        position: null,
      },
    },
    inputRoot: {},
    inputInput: {
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "30ch",
      backgroundColor: "rgb(247, 247, 247)",
      [theme.breakpoints.up("md")]: {
        width: "70ch",
      },
      padding: theme.spacing(2, 0, 2, 0),
    },
    searchIcon: {
      zIndex: 1,
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      // justifyContent: "center",
    },
  });

export default styles
