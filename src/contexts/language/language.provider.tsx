import { ReactNode, useContext, useReducer } from 'react';
import { LanguageKey } from '../../languages';
import { LanguageContext } from './language.context';
import { reducer } from './language.reducer';
interface ProviderProps {
   userLanguage: LanguageKey;
   children: ReactNode;
}
export const LanguageProvider: React.FC<ProviderProps> = ({
   userLanguage,
   children,
}) => {
   const [state, dispatch] = useReducer(reducer, {
      userLanguage: userLanguage,
   });

   return (
      <LanguageContext.Provider value={{ state, dispatch }}>
         {children}
      </LanguageContext.Provider>
   );
};

export function useLanguage() {
   const context = useContext(LanguageContext);
   if (context === undefined) {
      throw new Error('useSearch must be within a LanguageProvider');
   }
   return context;
}
