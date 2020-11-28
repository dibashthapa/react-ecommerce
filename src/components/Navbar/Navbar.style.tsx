import { fade } from "@material-ui/core/styles";
import { createStyles , Theme } from "@material-ui/core/styles"
const drawerWidth = 300;
const styles = (theme: Theme) => (
  createStyles({
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
    toolbar: {
      [theme.breakpoints.down("sm")]:{
      display:"flex",
      flexDirection:"column",
      }
    }, 
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
  title: {
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    margin:`auto auto ${theme.spacing(3)}px auto`,
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
  })
);

export default styles;
