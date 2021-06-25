import React, { useState } from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';
import {
   ProductCardWrapper,
   Footer,
   ProductCard,
   CartButton,
} from './index.style';
import { LanguageKey } from '../../languages';
import { Flex, Image } from '@chakra-ui/react';
import ProductModal from './ProductModal';
import { getNepaliPrice } from '../../helpers/convertLanguage';
import { useProductDispatch } from '../../store';
import { ADD_TO_CART } from '../../store/actions/actions';

export interface ProductProps {
   image: string;
   title: string;
   price: string;
   description: string;
   id: number;
   userLanguage: LanguageKey;
}
const Product: React.FC<ProductProps> = (product) => {
   const [open, setOpen] = useState(false);
   const dispatch = useProductDispatch();

   const addToCart = () => {
      dispatch({
         type: ADD_TO_CART,
         productDetails: { ...product, count: 0 },
      });
   };
   const { image, title, price, description, userLanguage } = product;
   return (
      <ProductCardWrapper>
         <ProductModal
            open={open}
            setOpen={setOpen}
            title={title}
            description={description}
            image={image}
         />
         <ProductCard>
            <div className="image" onClick={() => setOpen(true)}>
               <Image
                  fallbackSrc="/static/images/notfound.png"
                  src={image}
                  maxWidth="100%"
                  height="100%"
               />
            </div>
            <Footer>
               <h1 className="product-title">{title}</h1>
               <Flex alignItems="center" justify="space-between">
                  <p>
                     {userLanguage === 'en'
                        ? `${price}$`
                        : `रू ${getNepaliPrice(Number(price) * 118.75)}`}
                  </p>
                  <CartButton onClick={addToCart}>
                     <RiShoppingCart2Line />
                     &nbsp; Cart
                  </CartButton>
               </Flex>
            </Footer>
         </ProductCard>
      </ProductCardWrapper>
   );
};

export default Product;
