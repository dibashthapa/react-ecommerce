import React, { MouseEvent, useEffect, useState } from "react";
import { IconButton } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Cart } from "../../components/Cart/Cart";
import styles from "./Navbar.style";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import { useSelector } from "react-redux";

const useStyles = makeStyles(styles);
interface Props {
  window?: () => Window;
}

interface productInterface {
  id?: number;
  name: string;
  price: string;
  src: string;
  count?: number;
}

interface RootState {
  products: Array<productInterface>;
}

export const Navbar = (props: Props) => {
  const classes = useStyles();
  const product = useSelector((state: RootState) => state.products);
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState("static");
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleScroll = () => {
    const scrollBottom = window.scrollY;
    if (scrollBottom >= 200) {
      setPosition("fixed");
    } else {
      setPosition("static");
    }

  };
  return (
    <div className={classes.root}>

      <CssBaseline />
      <div className={classes.grow}>
        <AppBar
          position={position === "static" ? "static" : "fixed"}
          className={classes.appBar}
        >
          <Toolbar className={classes.toolbar}>
            <Typography className={classes.title} variant="h6">
              NepBazar
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </div>
              <InputBase
                placeholder="Search your products here"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>

            <div className={classes.grow}>
              <div className={classes.sectionDesktop}>
                <List className={classes.list}>
                  <ListItem>
                    <ListItemIcon onClick={toggleDrawer}>
                      <IconButton>
                        <Badge
                          badgeContent={product.length}
                          showZero
                          classes={{ badge: classes.cartBadge }}
                        >
                          <ShoppingBasketIcon />
                        </Badge>
                      </IconButton>
                    </ListItemIcon>
                  </ListItem>
                </List>
              </div>
            </div>
          </Toolbar>
        </AppBar>
        { open && <Cart />}
      </div>
    </div>
  );
};
