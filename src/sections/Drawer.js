import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Product from "../components/Product";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { groceries } from "../data";
const drawerWidth = 300;

export const DrawerApp = () => {
  const [anchor, setAnchor] = React.useState("bottom");

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

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleScroll = (e) => {
    const scrollBottom = e.currentTarget.scrollY;
    console.log(scrollBottom);
    if (scrollBottom >= 200) {
      setAnchor("left");
    } else {
      setAnchor("bottom");
    }
  };
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
          anchor={anchor}
        >
          <List>
            {groceries.map(({ name, key }) => {
              return (
                <ListItem button className={classes.ListItem} key={name}>
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
        <main className={classes.content}>
          <Product />
        </main>
      </div>
    </React.Fragment>
  );
};
