import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { groceries } from "../data";
import { DropButton } from "../components";
import { categories } from "../data"
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
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
}));

export const DrawerApp = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
 
    <div className={classes.root}>
     
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="bottom"
      >
        <div className={classes.toolbar} />

        <List>
          {groceries.map(({ name, key }) => {
            return (
              <ListItem button className={classes.ListItem}>
                <ListItemIcon>
                  <img
                    src={`/static/images/icons/${key}.svg`}
                    height="20px"
                    width="20px"
                  />
                </ListItemIcon>
                <ListItemText primary={name} />
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <main className={classes.content}></main>
    </div>
    </React.Fragment>
  );
};
