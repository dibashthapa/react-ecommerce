import styled from "styled-components";
import { FaGoogle } from "react-icons/fa";
import {
  Modal,
  chakra,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalFooter,
  Flex,
  Box,
} from "@chakra-ui/react";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: content-box;
  font-family: Lato, sans-serif;
  margin: 0px;
  text-align: center;
  background-color: #fff;
`;

const FormWrapper = styled.div`
  padding: 20px 30px;

  h3 {
    margin-bottom: 10px;
    font-family: Poppins, sans-serif;
    font-size: 21px;
    font-weight: 600;
    color: rgb(0, 158, 127);
  }

  span.sub-heading {
    margin-bottom: 30px;
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: rgb(119, 121, 140);
    display: block;
  }
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding-left: 18px;
  appearance: none;
  font-family: Lato, sans-serif;
  font-size: 15px;
  border: 1px solid rgb(241, 241, 241);
  border-radius: 6px;
  color: rgb(13, 17, 54);
  transition: all 0.25s ease 0s;
  height: 48px;
  background-color: rgb(247, 247, 247);
  margin-bottom: 10px;

  :focus {
    outline: none;
  }
`;

const Divider = styled.div`
  padding: 15px 18px;
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;

  &:before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: rgb(241, 241, 241);
    position: absolute;
    top: 50%;
  }

  & span {
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 400;
    color: rgb(13, 17, 54);
    line-height: 1;
    background-color: rgb(255, 255, 255);
    z-index: 1;
    position: relative;
    padding: 0px 10px;
  }
`;

const Button = styled.button`
  padding: 0px 30px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border-radius: 6px;
  appearance: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  text-align: center;
  text-decoration: none;
  font-family: inherit;
  border: 0px;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 158, 127);
  height: 48px;
  width: 100%;
`;

const GoogleBtn = styled(Button)`
  background-color: rgb(66, 133, 244);
`;

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
                <Input type="text" placeholder="demo@demo.com" />
                <Input type="text" placeholder="demo" />
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
          </ModalWrapper>{" "}
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
