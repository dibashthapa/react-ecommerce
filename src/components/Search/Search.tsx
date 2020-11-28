import React from "react";
import styles from "./Search.style";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { searchProduct } from "../../store/actions"
import { useDispatch , useSelector } from "react-redux"
import SearchAutoComplete from '../SearchAutocomplete/SearchAutoComplete'
const useStyles = makeStyles(styles);
const Search = () => {

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

  const dispatch = useDispatch()
  const product = useSelector((state: RootState) => state.products);
  const classes = useStyles();
  const [value , setValue ] = React.useState("")
  const searchProducts = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value)
  }

  return (
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
        onChange = { searchProducts }
        value={value }
      />
      { value.length > 0 && <SearchAutoComplete value={ value } /> }
    </div>
  );
};

export default Search;
