import styled from 'styled-components';

export const ModalWrapper = styled.div`
   width: 100%;
   height: 100%;
   box-sizing: content-box;
   font-family: Lato, sans-serif;
   margin: 0px;
   text-align: center;
   background-color: #fff;
`;

export const FormWrapper = styled.div`
   padding: 20px 30px;

   h3 {
      margin-bottom: 10px;
      font-family: Poppins, sans-serif;
      font-size: 21px;
      font-weight: 600;
      color: rgb(0, 158, 127);
   }

   span.sub-heading {
      margin-bottom: 30px;
      font-family: Lato, sans-serif;
      font-size: 15px;
      font-weight: 400;
      color: rgb(119, 121, 140);
      display: block;
   }
`;

export const Input = styled.input`
   display: block;
   width: fill-available;
   padding: 0px 18px;
   appearance: none;
   font-family: Lato, sans-serif;
   font-size: 15px;
   border: 1px solid rgb(241, 241, 241);
   border-radius: 6px;
   color: rgb(13, 17, 54);
   transition: all 0.25s ease 0s;
   height: 48px;
   background-color: rgb(247, 247, 247);
   margin-bottom: 10px;

   :focus {
      outline: none;
   }
`;

export const Divider = styled.div`
   padding: 15px 0px;
   width: 100%;
   display: flex;
   justify-content: center;
   position: relative;

   &:before {
      content: '';
      width: 100%;
      height: 1px;
      background-color: rgb(241, 241, 241);
      position: absolute;
      top: 50%;
   }

   & span {
      font-family: Lato, sans-serif;
      font-size: 15px;
      font-weight: 400;
      color: rgb(13, 17, 54);
      line-height: 1;
      background-color: rgb(255, 255, 255);
      z-index: 1;
      position: relative;
      padding: 0px 10px;
   }
`;

export const Button = styled.button`
   padding: 0px 30px;
   font-size: 15px;
   font-weight: 700;
   cursor: pointer;
   transition: all 0.3s ease 0s;
   border-radius: 6px;
   appearance: none;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-shrink: 0;
   text-align: center;
   text-decoration: none;
   font-family: inherit;
   border: 0px;
   color: rgb(255, 255, 255);
   background-color: rgb(0, 158, 127);
   height: 48px;
   width: 100%;
`;

export const GoogleBtn = styled(Button)`
   background-color: rgb(66, 133, 244);
`;
