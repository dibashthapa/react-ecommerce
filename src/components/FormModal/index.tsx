import { FaGoogle } from 'react-icons/fa';
import {
   Modal,
   ModalHeader,
   ModalBody,
   ModalContent,
   ModalOverlay,
   Flex,
   Box,
} from '@chakra-ui/react';
import {
   ModalWrapper,
   FormWrapper,
   Input,
   Button,
   Divider,
   GoogleBtn,
} from './index.style';
import { SmallCloseIcon } from '@chakra-ui/icons';
const FormModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
   isOpen,
   onClose,
}) => {
   return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
         <ModalOverlay />
         <ModalContent>
            <ModalHeader>
               <SmallCloseIcon
                  position="absolute"
                  right="20px"
                  color="gray.500"
                  cursor="pointer"
                  onClick={onClose}
               />
            </ModalHeader>
            <ModalBody>
               <ModalWrapper>
                  <FormWrapper>
                     <h3>Welcome Back</h3>
                     <span className="sub-heading">
                        Login with your email & password
                     </span>

                     <form onSubmit={(e) => e.preventDefault()}>
                        <Input type="text" placeholder="demo@demo.com" />
                        <Input type="text" placeholder="demo" />
                        <Button>Continue</Button>
                        <Divider>
                           <span>or</span>
                        </Divider>
                     </form>
                     <Box width="full">
                        <GoogleBtn>
                           <Flex alignItems="center">
                              <FaGoogle />
                              &nbsp;
                              <p>Continue with Google</p>
                           </Flex>
                        </GoogleBtn>
                     </Box>
                  </FormWrapper>
               </ModalWrapper>{' '}
            </ModalBody>
         </ModalContent>
      </Modal>
   );
};

export default FormModal;
