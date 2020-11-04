import React from "react";
import {
  Button,
  FormControl,
  makeStyles,
  Select,
  InputBase,
  withStyles,
  InputLabel,
  NativeSelect,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
const useStyles = makeStyles((theme) => ({
  button: {
    color: "rgb(0, 158, 127)",
    marginLeft: "20px",
  },
  select: {
    "&:focus": {
      backgroundColor: "#fff",
    },
  },
  paper: {
    marginBottom: "20px",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
    },
  },
}))(InputBase);
export const DropButton = ({ category }) => {
  const classes = useStyles();

  const [product, setProduct] = React.useState(category[0]);

  const handleChange = (event) => {
    const value = event.target.value;
    setProduct(value);
  };

  return (
    <div>
      <FormControl className={classes.margin}>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={product}
          onChange={handleChange}
          input={<BootstrapInput />}
          className={ classes.button }
          classes={{
            select: classes.select,
          }}
        >
          {category.map((value, key) => {
            return (
              <MenuItem value={value} key={key}>
                {value}{" "}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};