import React   from "react";
import {
  FormControl,
  makeStyles,
  Select,
  InputBase,
  withStyles,
} from "@material-ui/core";
import MenuItem from "@material-ui/core/MenuItem";
import styles from "./DropButton.style";

const useStyles = makeStyles(styles);
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
export const DropButton: React.FC<{ category: Array<string> }> = ({
  category,
}) => {
  const classes = useStyles();

  const [product, setProduct] = React.useState(category[0]);

  const handleChange = (event: React.ChangeEvent<any>) => {
    const value = event.target.value;
    setProduct(value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          value={product}
          onChange={handleChange}
          input={<BootstrapInput />}
          className={classes.button}
          classes={{
            select: classes.select
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
