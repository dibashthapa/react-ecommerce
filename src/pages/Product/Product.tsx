import React from "react";
import  {
  ProductWrapper,
  ProductImage,
  ProductTitle,
  ProductImageContainer 
} from "./Product.style";
import { Navbar } from "../../components";
import {
  Grid , 
  Container,
} from "@material-ui/core";
import image from "../../data/image";
import { useParams } from "react-router-dom";
interface paramType {
  id: string;
}

const Product: React.FC = () => {
  const { id } = useParams<paramType>();
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Grid container>
          {image
            .filter((value, index) => index === parseInt(id))
            .map((product) => {
              return (
                <React.Fragment>
                  <ProductWrapper>
                    <ProductImageContainer>
                      <ProductImage src={product.src} />
                    </ProductImageContainer>
                  </ProductWrapper>
                  <ProductWrapper style={{borderLeft:"1px solid rgb(241, 241, 241)"}}>
                      <ProductTitle>{product.name}</ProductTitle>
                  </ProductWrapper>
                </React.Fragment>
              );
            })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Product;
