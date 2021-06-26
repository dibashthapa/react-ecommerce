import { FaGoogle } from 'react-icons/fa';
import {
   Modal,
   chakra,
   ModalBody,
   ModalContent,
   ModalOverlay,
   ModalFooter,
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

const FormModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
   isOpen,
   onClose,
}) => {
   return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
         <ModalOverlay />
         <ModalContent>
            <ModalBody>
               <ModalWrapper>
                  <FormWrapper>
                     <h3>Welcome Back</h3>
                     <span className="sub-heading">
                        Login with your email & password
                     </span>

                     <Box width="xs">
                        <Input
                           type="text"
                           placeholder="demo@demo.com"
                           value="demo@demo.com"
                        />
                        <Input type="text" placeholder="demo" value="demo" />
                     </Box>
                     <Box width="full">
                        <Button>Continue</Button>
                     </Box>
                     <Divider>
                        <span>or</span>
                     </Divider>
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
            <ModalFooter
               display="flex"
               marginTop="15px"
               justifyContent="center"
               backgroundColor="gray.200"
            >
               Don't have any account ? &nbsp;
               <chakra.a color="green.500" href="/signup">
                  Sign Up
               </chakra.a>
            </ModalFooter>
         </ModalContent>
      </Modal>
   );
};

export default FormModal;
