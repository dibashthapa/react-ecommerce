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

export const ProductGrid = styled.div`
    display: grid;
    margin: 20px 10px;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 10px;
`;

export const ProductImg = styled.img`
    height: 100%;
    max-width: 100%;
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
