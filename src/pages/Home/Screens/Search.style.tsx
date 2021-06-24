import styled from 'styled-components';

export const Title = styled.h2`
   color: rgb(13, 17, 54);
   font-weight: 700;
   text-align: center;
   font-size: 60px;

   @media (min-width: 10em) and (max-width: 70em) {
      & {
         font-size: 30px;
      }
   }
   margin-bottom: 15px;
   font-family: 'Poppins', sans-serif;
`;

export const SubTitle = styled.p`
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
