import { MouseEventHandler } from 'react';
import {
   chakra,
   InputGroup,
   InputRightElement,
   InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { SearchInput, DesktopSearch } from './index.style';
import Button from '../Button';

interface SearchBoxProps {
   inputRef: React.RefObject<HTMLInputElement>;
   onClick: MouseEventHandler<HTMLInputElement>;
   placeholder: string;
   label: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
   inputRef,
   onClick,
   placeholder,
   label,
}) => {
   return (
      <>
         <DesktopSearch>
            <InputGroup>
               <SearchInput
                  type="text"
                  placeholder={placeholder}
                  ref={inputRef}
               />
               <InputRightElement width="6rem" height="100%" onClick={onClick}>
                  <Button>
                     <SearchIcon /> &nbsp;{' '}
                     <chakra.span
                        display={{
                           sm: 'none',
                           md: 'none',
                           base: 'none',
                           lg: 'block',
                        }}
                     >
                        {label}
                     </chakra.span>
                  </Button>
               </InputRightElement>
            </InputGroup>
         </DesktopSearch>
      </>
   );
};

export default SearchBox;
