import { fade } from "@material-ui/core/styles";
const styles = (theme) => ({
  appBar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 1px 2px",
    padding: "10px",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    zIndex: 1,
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",

    justifyContent: "center",
  },
  inputRoot: {},
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    backgroundColor: "rgb(247, 247, 247)",
    [theme.breakpoints.up("md")]: {
      width: "70ch",
    },
    padding: "15px 15px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  list: {
    display: "flex",
    flexDirection: "row",
  },
  listItem: {
    fontSize: "15px",
    width: "90px",
    color: "white",
    fontWeight: 700,
  },
  cartBadge: {
    fontWeight: "bold",
    color: "white",
    backgroundColor: "rgb(1, 147, 118)",
  },
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
});

export default styles;
