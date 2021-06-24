import React, { useRef } from 'react';
import { Box, Flex, HStack, useDisclosure } from '@chakra-ui/react';
import SearchBox from '../../../components/SearchBox';
import { Title, SubTitle } from './Search.style';
import { useSearch } from '../../../contexts/search/search.provider';
import { useLanguage } from '../../../contexts/language/language.provider';
import { useHistory } from 'react-router-dom';
import { dictionaryList } from '../../../languages';
const Search: React.FC = () => {
   const history = useHistory();
   const {
      state: { userLanguage },
   } = useLanguage();
   const mobileNav = useDisclosure();
   const { state, dispatch } = useSearch();
   const inputRef = useRef<HTMLInputElement>(null);

   const handleClickSearchButton = (): void => {
      const value = inputRef.current?.value;

      if (value) {
         history?.push({
            pathname: '/search',
            search: `query=${value}`,
            state: { value },
         });
         dispatch({
            type: 'UPDATE',
            payload: {
               ...state,
               query: value,
            },
         });
      }
   };
   return (
      <Flex
         height="calc(100vh - 200px)"
         justifyContent="center"
         flexDirection="column"
      >
         <Box>
            <Title> {dictionaryList[userLanguage].title}</Title>
            <SubTitle>{dictionaryList[userLanguage].subtitle}</SubTitle>
         </Box>
         <Box width="100%" display="flex" justifyContent="center">
            <HStack display={mobileNav.isOpen ? 'none' : 'flex'} width="lg">
               <SearchBox
                  onClick={handleClickSearchButton}
                  inputRef={inputRef}
                  placeholder={dictionaryList[userLanguage].placeholder}
                  label={dictionaryList[userLanguage].search}
               />
            </HStack>
         </Box>
      </Flex>
   );
};

export default Search;
