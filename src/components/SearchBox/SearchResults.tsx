import React from 'react';
import {
    SearchResultWrapper,
    ItemWrapper,
    SubmenuHeading,
} from './index.style';

type SuggestionsProps = {
    suggestions?: string[];
    clearSearch?: () => void;
    setSuggestionValue: (suggestion: string) => void;
};

const SearchResults: React.FC<SuggestionsProps> = ({
    suggestions,
    clearSearch,
    setSuggestionValue,
}) => {
    const setSuggestion = (suggestion: string) => {
        setSuggestionValue(suggestion);
    };

    return (
        <SearchResultWrapper>
            <SubmenuHeading>
                <h3>Recent Search</h3>{' '}
                <button onClick={clearSearch}>Clear</button>
            </SubmenuHeading>
            {suggestions?.map((suggestion: string) => (
                <ItemWrapper
                    key={suggestion}
                    onClick={() => setSuggestion(suggestion)}
                >
                    {suggestion}
                </ItemWrapper>
            ))}
        </SearchResultWrapper>
    );
};

export default SearchResults;
