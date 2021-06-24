import { createContext } from 'react';
import { ActionType } from './search.reducer';

type Dispatch = (action: ActionType) => void;
export type State = { query: string; category?: string };

export const SearchContext = createContext<{ state: State; dispatch: Dispatch } | undefined>(
    undefined
);
