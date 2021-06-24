import { ReactNode, useContext, useReducer } from 'react';
import { SearchContext } from './search.context';
import { reducer } from './search.reducer';

interface ProviderProps {
    category?: string;
    query: string;
    children: ReactNode;
}
export const SearchProvider: React.FC<ProviderProps> = ({ category, query, children }) => {
    const [state, dispatch] = useReducer(reducer, { query: query, category: category });

    return <SearchContext.Provider value={{ state, dispatch }}>{children}</SearchContext.Provider>;
};

export function useSearch() {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error('useSearch must be within a SearchProvider');
    }
    return context;
}
