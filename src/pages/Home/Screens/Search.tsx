import React from "react";
import {
  Box,
  InputRightElement,
  Flex,
  InputGroup,
  HStack,
  useDisclosure,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styled from "styled-components";

const Title = styled.h2`
  @media screen and (min-width: 991px) {
    & {
      font-size: 50px;
    }
  }

  @media screen and (min-width: 767px) {
    & {
      font-size: 60px;
    }
    color: rgb(13, 17, 54);
    font-weight: 700;
    text-align: center;
  }
  margin-bottom: 15px;
  font-family: "Poppins", sans-serif;
`;

const SubTitle = styled.p`
  @media screen and (min-width: 991px) {
    & {
      margin-bottom: 60px;
      text-align: center;
    }
  }
  @media screen and (min-width: 767px) {
    font-size: 19px;
  }
  font-size: 15px;
  color: rgb(119, 121, 140);
  display: block;
  font-weight: 400;
  line-height: 1.5;
  font-family: Lato, sans-serif;
  margin: 0px;
`;

const SearchInput = styled.input`
  padding-left: 20px;
  width: 100%;
  flex-grow: 1;
  font-size: 15px;
  padding-right: 20px;
  height: 48px;
  color: rgb(119, 121, 140);
  background-color: inherit;
  appearance: none;
  border: 0px;
  &:focus {
    outline: 0px;
  }
`;

const SearchButton = styled.button`
  background-color: rgb(0, 158, 127);
  color: rgb(255, 255, 255);
  font-size: 15px;
  font-weight: 700;
  display: flex;
  height: 48px;
  -webkit-box-align: center;
  align-items: center;
  border: 0px;
  outline: 0px;
  padding-left: 30px;
  padding-right: 30px;
  cursor: pointer;
  flex-shrink: 0;
  font-family: Lato, sans-serif;
  margin: 0px;
`;

const Search: React.FC = () => {
  const mobileNav = useDisclosure();
  return (
    <Flex
      height="calc(100vh - 200px)"
      justifyContent="center"
      flexDirection="column"
    >
      <Box>
        <Title>Grocery Delivered in 90 Minutes</Title>
        <SubTitle>
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </SubTitle>
      </Box>
      <Box width="100%" display="flex" justifyContent="center">
        <HStack display={mobileNav.isOpen ? "none" : "flex"} width="lg">
          <InputGroup
            backgroundColor="#fff"
            boxShadow=" rgba(0 ,0 ,  0 ,0.6)"
            width="full"
          >
            <SearchInput
              type="text"
              placeholder="Search your products from here"
            />
            <InputRightElement width="6rem" height="100%">
              <SearchButton>
                <SearchIcon /> &nbsp; Search
              </SearchButton>
            </InputRightElement>
          </InputGroup>
        </HStack>
      </Box>
    </Flex>
  );
};

export default Search;
