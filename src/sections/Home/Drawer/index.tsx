import React , { MouseEvent } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Product from "../../../components/Product";
import { groceries } from "../../../data";
import styles from "./style";
import { DropButton } from "../../../components/Dropbutton";
import { categories  } from "../../../data";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import { HiMenuAlt1 } from "react-icons/hi";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Drawer } from "@material-ui/core"
import { useSelector } from "react-redux"
const useStyles = makeStyles(styles);
interface Props {
  window?: () => Window;
}

  interface productInterface {
    id?:number,
    name:string , 
    price:string ,
    src:string,
    count?:number
  }

  interface RootState{
    products:Array<productInterface>
  }

export const DrawerApp = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState('bottom');
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const product = useSelector((state:RootState) => state.products)
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCategoryOpen = (event:MouseEvent<HTMLLIElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverOpen = (event:MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleScroll = () => {
    const scrollBottom = window.scrollY;
    if (scrollBottom >= 240) {
      setAnchor("left");
    } else {
      setAnchor("bottom");
    }
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}> Groceries </MenuItem>
      <MenuItem onClick={handleMenuClose}> Electronics </MenuItem>
      <MenuItem onClick={handleMenuClose}> Furnitures </MenuItem>
    </Menu>
  );

  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleCategoryOpen}>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </MenuItem>
    </Menu>
  );
  const drawer = (
    <div>
      {/* <div className={classes.toolbar} /> */}

      <List>
        {groceries.map(({ name, key }) => {
          return (
            <ListItem button  key={name}>
              <ListItemIcon>
                <img
                  src={`/static/images/icons/${key}.svg`}
                  height="20px"
                  width="20px"
                  alt = { name }
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
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.grow}>
        <AppBar position={"fixed"} className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
            >
              <HiMenuAlt1 />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              PickBazar
            </Typography>
            <DropButton category={categories} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
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
                    <ListItemText
                      classes={{ root: classes.listItem }}
                    ></ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemText
                      classes={{ root: classes.listItem }}
                    ></ListItemText>
                  </ListItem>
                  <ListItem >
                    <Typography
                      aria-haspopup="true"
                      onMouseEnter={handlePopoverOpen}
                      onMouseLeave={handlePopoverClose}
                    >
                      <ListItemIcon>
                        <Badge
                          badgeContent={ product.length}
                          showZero
                          classes={{ badge: classes.cartBadge }}
                        >
                          <ShoppingBasketIcon />
                        </Badge>
                      </ListItemIcon>
                    </Typography>
                  </ListItem>
                </List>
              </div>
              <div className={classes.sectionMobile}>
                <ListItem disableGutters>
                  
                  
                  <ListItemText primary={"Grocery"} color="rgb(0, 158, 127)" classes={{
                    root:classes.primaryList
                  }}/>
                </ListItem>
              </div>
            </div>
            {renderMobileMenu}
            {renderMenu}
          </Toolbar>
        </AppBar>
      </div>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paperAnchorLeft: classes.paperAnchorTop,
              paper: classes.drawerPaper,
              paperAnchorBottom: classes.paperAnchorBottom,
            }}
            variant="permanent"
            anchor={anchor === "bottom" ? "bottom":"left"}
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <Product />
      </main>
    </div>
  );
};

DrawerApp.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
