import { useState, ChangeEventHandler } from 'react';
import { Box, Text, Select, Flex } from '@chakra-ui/react';
import { List, ListItem, Button } from '@chakra-ui/react';
import FormModal from '../FormModal';
import { languageOptions, dictionaryList, LanguageKey } from '../../languages';
import { useLanguage } from '../../contexts/language/language.provider';
import { Nav } from './index.style';

const Navbar: React.FC = () => {
   const [open, setOpen] = useState(false);
   const { state, dispatch } = useLanguage();

   const handleChangeLanguage: ChangeEventHandler<HTMLSelectElement> = (e) => {
      const value = e.target.value as LanguageKey;
      dispatch({
         type: 'UPDATE',
         payload: {
            userLanguage: value,
         },
      });
   };
   return (
      <Nav>
         <FormModal isOpen={open} onClose={() => setOpen(false)} />
         <Flex justify="space-between" marginX="8">
            <Box>
               <Text
                  display="flex"
                  alignItems="center"
                  fontSize="20px"
                  fontWeight="bold"
               >
                  {dictionaryList[state.userLanguage].site}
               </Text>
            </Box>
            <Box width="100%" display="flex" justifyContent="flex-end">
               <List display="flex" alignItems="center">
                  <ListItem px="4">
                     <Select
                        onChange={handleChangeLanguage}
                        value={state.userLanguage}
                     >
                        {Object.entries(languageOptions).map(([id, name]) => (
                           <option key={id} value={id}>
                              {name}
                           </option>
                        ))}
                     </Select>
                  </ListItem>
                  <Button
                     colorScheme="green"
                     border="none"
                     onClick={() => setOpen(true)}
                  >
                     {dictionaryList[state.userLanguage].join}
                  </Button>
               </List>
            </Box>
         </Flex>
      </Nav>
   );
};

export default Navbar;
