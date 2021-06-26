import styled from 'styled-components';

export const Title = styled.p`
   color: rgb(13, 17, 54);
   font-weight: 700;
   text-align: center;
   font-size: 60px;

   @media screen and (max-width: 991px) {
      & {
         font-size: 30px;
      }
   }

   margin-bottom: 15px;
   font-family: 'Poppins', sans-serif;
`;

export const SubTitle = styled.p`
   color: rgb(13, 17, 54);
   font-weight: 400;
   text-align: center;
   font-size: 20px;

   margin-bottom: 15px;
   font-family: 'Poppins', sans-serif;
`;
