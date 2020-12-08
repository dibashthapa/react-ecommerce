import { Theme } from "@material-ui/core";
import styled from "styled-components";
export const ProductWrapper = styled.div`
  background-color: rgb(255, 255, 255);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  box-sizing: border-box;
  width: 50%;
  max-width: 50%;
  padding: 60px;
  margin-top: 30px;
`;

export const ProductImageContainer = styled.div`
  position: relative;
  height: 100%;
  margin:auto;
`;

export const ProductTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const ProductDescription = styled.div`
  font-size: 15px;
  text-align: justify;
`;

export const ProductImage = styled.img`
  height: 200px;
  width: 100%;
`;
const style = (theme: Theme) => ({
  root: {},
  producteDetails: {
    padding: "35px 20px",
  },
  media: {
    height: 300,
    width: "50%",
    margin: "auto",
  },
});
export default style;
