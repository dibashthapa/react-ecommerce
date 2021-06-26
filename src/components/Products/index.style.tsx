import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
   @media (max-width: 1199px) and (min-width: 991px) {
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 20px;
   }
   animation-fill-mode: both;
   animation-duration: 800ms;
   animation-delay: 640ms;
   animation-iteration-count: 1;
   animation-name: reveal;
   opacity: 1;
   border: 1px solid rgb(241, 241, 241);

   @keyframes reveal {
      0% {
         opacity: 0;
      }
      100% {
         opacity: 1;
         transform: none;
      }
   }
`;

export const ProductCard = styled.div`
   width: 100%;
   height: auto;
   background-color: rgb(255, 255, 255);
   position: relative;
   border-radius: 6px;
   cursor: pointer;

   .image {
      height: 240px;
      padding: 5px;
      position: relative;
      text-align: center;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
   }
`;

export const ProductGrid = styled.div`
   @media (max-width: 1199px) and (min-width: 991px) {
      margin: 20px 10px;
      gap: 10px;
   }
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

export const ProductImg = styled.img`
   height: 100%;
   max-width: 100%;
`;

export const CartButton = styled.button`
   border: 2px solid rgb(247, 247, 247);
   border-radius: 18px;
   height: 36px;
   padding-left: 17px;
   padding-right: 17px;
   font-size: 13px;
   font-weight: 700;
   cursor: pointer;
   transition: all 0.3s ease 0s;
   appearance: none;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
   text-align: center;
   height: 38px;
   text-decoration: none;
   font-family: inherit;
   color: rgb(0, 158, 127);
   background-color: rgb(255, 255, 255);

   &:hover {
      color: rgb(255, 255, 255);
      background-color: rgb(0, 158, 127);
      border-color: rgb(0, 158, 127);
   }
`;

export const Footer = styled.div`
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

export const CounterBox = styled.div`
   display: flex;
   background-color: rgb(0, 158, 127);
   color: #fff;
   font-size: 15px;
   font-weight: 700;
   border-radius: 50px;
   justify-content: space-between;
   align-items: center;
   overflow: hidden;
   flex-shrink: 0;
   width: 104px;
   height: 36px;

   button {
      border: none;
      background-color: transparent;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
      padding: 10px;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
   }
`;
