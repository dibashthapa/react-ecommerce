import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
const useStyles = makeStyles((theme) => ({
  button: {
    backgroundColor: "white",
    border: "1px solid rgb(241, 241, 241)",
    marginLeft: "20px",
    textTransform: "capitalize",
    textDecoration: "none",
    fontSize: "15px",
    color: "rgb(0, 158, 127)",
  },
  paper: {
    marginBottom: "20px",
  },
}));
export const DropButton = ({ category }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [product, setProduct] = React.useState(category[0]);
  const anchorRef = React.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    const value  = event.target.getAttribute("value");
    setProduct(value);

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  return (
    <div>
      <Button
        className={classes.button}
        endIcon={<ArrowDropDownIcon />}
        ref={anchorRef}
        onClick={handleToggle}
      >
        {product}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  {category.map(value=> {
                    return (
                      <MenuItem onClick={handleClose} value={ value }>{ value }</MenuItem>
                    )
                  })}
                 
                
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
