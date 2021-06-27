import styled from 'styled-components';

export const ProductGrid = styled.div`
   @media (min-width: 991px) {
      margin: 20px 10px;
      gap: 10px;
   }
   display: grid;
   margin-bottom: 20px;
   grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;
