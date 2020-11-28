import React from "react";
import { SearchResults, ResultItem } from "./SearchAutoComplete.style";
import image from "../../data/image";
import { Link } from "react-router-dom"
interface Props {
  value: string;
}
const SearchAutoComplete: React.FC<Props> = ({ value }) => {
  return (
    <SearchResults>
      {value.length > 0 &&
        image
          .filter((p) => p.name.startsWith(value))
        .map((p , index) => <Link to={`/product/${index}`}><ResultItem>{p.name}</ResultItem></Link>)}
    </SearchResults>
  );
};

export default SearchAutoComplete;
