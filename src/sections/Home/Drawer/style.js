import { fade } from "@material-ui/core/styles";
const drawerWidth = 300;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  grow: {
    flexGrow: 1,
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  paperAnchorBottom: {
    bottom: "auto",
  },
  paperAnchorTop: {
    top: "90px",
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
  appBar: {
    // [theme.breakpoints.up("sm")]: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   marginLeft: drawerWidth,
    // },
    backgroundColor: "white",
    color: "black",
    boxShadow: "rgba(0, 0, 0, 0.06) 0px 1px 2px",
    padding: theme.spacing(2, 0, 2, 0),
    zIndex: theme.zIndex.drawer + 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,

    [theme.breakpoints.down("sm")]: {
      top: null,
    },
  },

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
    marginLeft: theme.spacing(2),
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(5),
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(3),
      width: "100%",
      position: null,
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
    // justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      right: 0,
    },
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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    padding: theme.spacing(2, 0, 2, 0),
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
  primaryList: {
    "&:before": {
      content: "",
      width: "5px",
      height: "5px",
      display: "block",
      borderRadius: "50%",
      backgroundColor: "rgb(255, 173, 94)",
      marginRight: "7px",
    },
  },
});

export default styles;
