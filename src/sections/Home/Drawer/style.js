const drawerWidth = 300;
const styles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    borderTop: "none",
  },

  // necessary for content to be below app bar

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  listItem: {
    fontWeight: "500",
  },
  paperAnchorBottom: {
    bottom: "auto",
  },
  paperAnchorTop: {
    top: "90px",
  },
});

export default styles
