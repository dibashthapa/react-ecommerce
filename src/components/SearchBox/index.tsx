import { MouseEventHandler } from 'react';
import { InputGroup, InputRightElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { SearchInput } from './index.style';
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
      <InputGroup
         backgroundColor="#fff"
         boxShadow=" rgba(0 ,0 ,  0 ,0.6)"
         width="full"
      >
         <SearchInput type="text" placeholder={placeholder} ref={inputRef} />
         <InputRightElement width="6rem" height="100%" onClick={onClick}>
            <Button>
               <SearchIcon /> &nbsp; {label}
            </Button>
         </InputRightElement>
      </InputGroup>
   );
};

export default SearchBox;
