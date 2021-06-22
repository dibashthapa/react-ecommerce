import styled from "styled-components";
import { useQuery } from "@apollo/client";
import { GET_PRODUCT_DETAILS } from "../../../graphql/query/product.query";
const ProductCardWrapper = styled.div`
  @media (max-width: 1199px) and (min-width: 991px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 20px;
  }
  border: 1px solid rgb(241, 241, 241);
`;

const ProductCard = styled.div`
    height:auto;
    width:100%;
    background-color:rgb(255,255,255);
    position:relative , 
    border-radius:6px;
    cursor:pointer;

    .image{
    height: 240px;
    padding: 5px;
    position: relative;
    text-align: center;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center
    }
`;

const ProductGrid = styled.div`
  display: grid;
  margin: 20px 10px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 10px;
`;

const ProductImg = styled.img`
  height: 100%;
  max-width: 100%;
`;

const Footer = styled.div`
  padding: 20px 25px 20px;

  .product-title {
    font-family: Lato, sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: rgb(13, 17, 54);
    margin: 0px 0px 7px;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const ProductList = () => {
  const { data } = useQuery(GET_PRODUCT_DETAILS);
  return (
    <ProductGrid>
      {data?.products?.items?.map(
        ({ image, title }: { image: string; title: string }, index: number) => (
          <ProductCardWrapper key={index}>
            <ProductCard>
              <div className="image">
                <ProductImg src={image} />
              </div>
              <Footer>
                <h1 className="product-title">{title}</h1>
              </Footer>
            </ProductCard>
          </ProductCardWrapper>
        )
      )}
    </ProductGrid>
  );
};

export default ProductList;
