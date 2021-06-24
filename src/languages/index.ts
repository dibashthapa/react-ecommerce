import en from './en.json';
import ne from './ne.json';

interface Language {
   site: string;
   title: string;
   subtitle: string;
   search: string;
   placeholder: string;
   join: string;
}

export type LanguageKey = 'en' | 'ne';

export const dictionaryList: Record<LanguageKey, Language> = { en, ne };

export const languageOptions = {
   en: 'English',
   ne: 'Nepali',
};
