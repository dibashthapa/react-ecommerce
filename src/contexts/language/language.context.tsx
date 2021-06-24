import { createContext } from 'react';
import { LanguageKey } from '../../languages';

type Dispatch = (action: ActionType) => void;
export type State = { userLanguage: LanguageKey };
export type ActionType = {
   type: 'UPDATE';
   payload: { userLanguage: LanguageKey };
};

export const LanguageContext = createContext<
   { state: State; dispatch: Dispatch } | undefined
>(undefined);
