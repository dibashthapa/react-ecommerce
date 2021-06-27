import styled from 'styled-components';

export const SidebarWrapper = styled.div`
   @media screen and (max-width: 767px) {
      display: none;
   }
   .sticky-inner-wrapper {
      overflow-y: auto;
   }
`;

export const CategoryDrawerWrapper = styled.div`
   @media screen and (max-width: 767px) {
      display: flex;
      justify-content: flex-end;
      padding-right: 10px;
   }
   display: none;

   p {
      color: rgb(0, 158, 127);
      cursor: pointer;
      display: flex;
      align-items: center;

      &:before {
         content: '';
         width: 5px;
         height: 5px;
         display: block;
         border-radius: 50%;
         background-color: rgb(255, 173, 94);
         margin-right: 7px;
      }
   }
`;
