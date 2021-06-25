import { CartHanger, PriceBox, TotalItems } from './index.style';
import CartDrawer from './CartDrawer';
import { useDisclosure } from '@chakra-ui/react';

const Cart = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   return (
      <CartHanger onClick={onOpen}>
         <CartDrawer isOpen={isOpen} onClose={onClose} />
         <TotalItems>2 Items</TotalItems>
         <PriceBox>$41.50</PriceBox>
      </CartHanger>
   );
};
export default Cart;
