import React from "react";
import {
  SearchResults,
  StyledLink,
  ResultItem,
} from "./SearchAutoComplete.style";
import image from "../../data/image";
interface Props {
  value: string;
}
const SearchAutoComplete: React.FC<Props> = ({ value }) => {
  return (
    <SearchResults>
      {value.length > 0 &&
        image
          .filter((p) => p.name.startsWith(value))
          .map((p, index:number) => (
            <StyledLink to={`/product/${p.name}`}>
              <ResultItem>{p.name}</ResultItem>
            </StyledLink>
          ))}
    </SearchResults>
  );
};

export default SearchAutoComplete;
