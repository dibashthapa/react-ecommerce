import React, { useState } from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri';
import {
   ProductCardWrapper,
   ProductImg,
   Footer,
   ProductCard,
   CartButton,
} from './index.style';
import { LanguageKey } from '../../languages';
import { Flex, Image } from '@chakra-ui/react';
import ProductModal from './ProductModal';

export interface ProductProps {
   image: string;
   title: string;
   price: string;
   description: string;
   userLanguage: LanguageKey;
}
const Product: React.FC<ProductProps> = ({
   image,
   title,
   price,
   description,
   userLanguage,
}) => {
   const [open, setOpen] = useState(false);

   const getNepaliPrice = (nums: number) => {
      const numbers = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
      const engNum = String(nums).split('').map(convert).join('');

      function convert(num: string) {
         return numbers[Number(num)];
      }

      return engNum;
   };
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
                  <CartButton>
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
