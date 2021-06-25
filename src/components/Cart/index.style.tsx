import styled from 'styled-components';

export const CartHanger = styled.button`
   height: auto;
   width: auto;
   display: flex;
   flex-direction: column;
   -webkit-box-align: center;
   align-items: center;
   -webkit-box-pack: center;
   justify-content: center;
   background-color: rgb(0, 158, 127);
   padding: 0px;
   border-radius: 6px 0px 0px 6px;
   box-shadow: rgb(0 0 0 / 16%) 0px 21px 36px;
   border: 0px;
   outline: 0px;
   cursor: pointer;
   position: fixed;
   right: 0px;
   top: 50%;
   margin-top: -46px;
   z-index: 99;
`;

export const TotalItems = styled.span`
   font-family: Lato, sans-serif;
   font-size: 13px;
   font-weight: 700;
   color: rgb(255, 255, 255);
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   -webkit-box-pack: center;
   justify-content: center;
   padding: 15px 10px;
`;

export const PriceBox = styled.span`
   width: auto;
   height: 35px;
   min-width: 80px;
   overflow: hidden;
   border-radius: 6px;
   display: inline-flex;
   align-items: center;
   justify-content: center;
   background-color: rgb(255, 255, 255);
   font-family: Lato, sans-serif;
   font-size: 13px;
   font-weight: 700;
   color: rgb(0, 158, 127);
   margin: 0px 10px 10px;
`;
