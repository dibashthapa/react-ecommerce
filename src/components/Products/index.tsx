import React, { useState } from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';
import {
   ProductCardWrapper,
   Footer,
   ProductCard,
   CartButton,
   CounterBox,
} from './index.style';
import { LanguageKey } from '../../languages';
import { Flex, Image } from '@chakra-ui/react';
import ProductModal from './ProductModal';
import { getNepaliPrice } from '../../helpers/convertLanguage';
import { useProductDispatch, useProductSelector } from '../../store';
import {
   addToCart,
   addQuantity,
   subtractQuantity,
   removeCart,
} from '../../store/actions';

export interface ProductProps {
   image: string;
   title: string;
   price: string;
   description: string;
   id: number;
   userLanguage: LanguageKey;
   unit: string;
}
const Product: React.FC<ProductProps> = (product) => {
   const [open, setOpen] = useState(false);
   const dispatch = useProductDispatch();
   const stateProducts = useProductSelector((state) => state.products);

   const getQuantity = () => {
      const count = stateProducts
         .filter((p) => p.id === product.id)
         .map((p) => p.count)
         .join('');

      return Number(count);
   };
   const addCart: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      e.stopPropagation();
      const prod = { ...product, count: 1 };
      dispatch(addToCart(prod));
   };

   const increaseQuantity = () => {
      const prod = { ...product, count: getQuantity() + 1 };
      dispatch(addQuantity(prod));
   };

   const decreaseQuantity = () => {
      const prod = { ...product, count: getQuantity() - 1 };
      if (getQuantity() - 1 === 0) {
         dispatch(removeCart({ ...product, count: 1 }));
      } else {
         dispatch(subtractQuantity(prod));
      }
   };

   const onClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
      e.stopPropagation();
      setOpen(true);
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
            addCart={addCart}
            getQuantity={getQuantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
         />
         <ProductCard>
            <div className="image" onClick={onClick}>
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

                  {getQuantity() > 0 ? (
                     <CounterBox>
                        <button onClick={increaseQuantity}>+</button>
                        <span>{getQuantity()}</span>
                        <button onClick={decreaseQuantity}>-</button>
                     </CounterBox>
                  ) : (
                     <CartButton onClick={addCart}>
                        <RiShoppingCart2Line />
                        &nbsp; Cart
                     </CartButton>
                  )}
               </Flex>
            </Footer>
         </ProductCard>
      </ProductCardWrapper>
   );
};

export default Product;
