import styled from 'styled-components';

export const Header = styled.div`
   padding: 15px 25px;
   background-color: #fff;
   display: flex;
   align-items: center;
   justify-content: space-between;
   border-bottom: 1px solid #ddd;

   .item-count {
      display: inline-flex;
      align-items: center;
      color: rgb(0, 158, 127);

      span {
         font-family: Lato, sans-serif;
         font-size: 15px;
         font-weight: 600;
         color: rgb(0, 158, 127);
         padding-left: 10px;
      }
   }

   .close-btn {
      width: 14px;
      height: 14px;
      display: inline-flex;
      align-items: center;
      padding: 0px;
      border: 0px;
      cursor: pointer;
      outline: 0px;
      color: rgba(0, 0, 0, 0.25);
      transition: all 0.4s ease 0s;
      background-color: transparent;

      &:hover {
         color: rgb(234, 77, 74);
      }
   }
`;

export const Body = styled.div`
   max-height: calc(100vh - 245px);
   background-color: #fff;
   height: auto;
   width: 100%;
`;

export const Item = styled.div`
   font-size: 15px;
   font-weight: 700;
   padding: 15px 25px;
   border-bottom: 1px solid #ccc;
   display: flex;
   align-items: center;

   .counter-box {
            display: flex;
            font-size: 15px;
            font-weight: 700;
            border-radius: 200px;
            -webkit-box-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            align-items: center;
            overflow: hidden;
            flex-shrink: 0;
            width: 30px;
            height: 90px;
            flex-direction: column-reverse;
            background-color: rgb(247, 247, 247);
            color: rgb(13, 17, 54);

            button {
                 border: none;
                 background-color: transparent;
                 display: flex;
                 -webkit-box-align: center;
                 align-items: center;
                 -webkit-box-pack: center;
                 justify-content: center;
                 height: 100%;
                 padding: 10px;
                 cursor: pointer;
                 color: rgb(119, 121, 140);
            }
        }
   }

   img {
        height:60px;
        width:60px;
        margin:0px 15px;
        object-fit:cover;
   }

   .info {
        display:flex;
        flex-direction:column;
        margin-left:15px;

   }
        .item-name {
            color: rgb(13, 17, 54);
            margin-bottom: 0px;
            line-height: 1.5;
        }

        .item-price {
            color: rgb(0, 158, 127);
            margin-top: 10px;
            margin-bottom: 10px;
        }
        .item-weight {
            font-size:13px;
            font-weight:400;
            color: rgb(119, 121, 140);
            margin-bottom: 5px;
        }

        .item-total {
            color: rgb(13, 17, 54);
            margin-left: auto;
        }

        .item-remove {
            padding:5px;
            border:0px;
            outline:0px;
            margin-left:15px;
            cursor:pointer;
            color: rgba(0, 0, 0, 0.25);
            transition: all 0.4s ease 0s;
            background-color: transparent;
        }
`;
