import styled from 'styled-components';

export const ProductWrapper = styled.div`
   background-color: #fff;
`;

export const ProductModalImage = styled.div`
   height: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   max-height: 100%;
   position: relative;

   @media screen and (min-width: 991px) {
      svg {
         display: none;
      }
   }

   @media screen and (max-width: 450px) {
      & {
         height: 150px;
      }
   }

   img {
      height: 100%;
      max-width: 100%;
      max-height: 250px;
   }
`;

export const DescriptionWrapper = styled.div`
   border-left: 1px solid rgb(243, 243, 243);
   display:flex;
   flex-direction:column;
   align-items:center;
   justify-content:center;
   @media screen and (max-width: 450px) {
        .product-description {
            height:80px;
            overflow-y:auto;
        }
   }

   .product-info {
      padding: 50px;
   }

   .product-title {
        width:100%;
        display:flex;
        align-items:flex-start;
        justify-content:flex-start;
        margin-bottom:10px;
   }

   .product-weight {
         font-family:Lato, sans-serif;
         font-size:13px;
         font-weight:400p
         color:rgb(119,121,140);
   }


   .product-description {
         font-family:Lato, sans-serif;
         font-weight:500;
         color:rgb(66,69,97);
         margin-top:30px;

   }

   .product-cart {
        display:flex;
        justify-content:space-between;
        margin-top:30px;
        margin-bottom:15px;
   }
`;
