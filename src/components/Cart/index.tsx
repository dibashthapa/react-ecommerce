import { CartHanger, PriceBox, TotalItems } from './index.style';
import CartDrawer from './CartDrawer';
import { useDisclosure } from '@chakra-ui/react';
import { useProductSelector, useProductDispatch } from '../../store';
import { addQuantity, removeCart, subtractQuantity } from '../../store/actions';

const Cart = () => {
   const { isOpen, onOpen, onClose } = useDisclosure();
   const products = useProductSelector((state) => state.products);
   const dispatch = useProductDispatch();
   const getQuantity = (product: rootState) => {
      const count = products
         .filter((p) => p.id === product.id)
         .map((p) => p.count)
         .join('');

      return Number(count);
   };

   const increaseQuantity = (product: rootState) => {
      const prod = { ...product, count: getQuantity(product) + 1 };
      dispatch(addQuantity(prod));
   };

   const decreaseQuantity = (product: rootState) => {
      const prod = { ...product, count: getQuantity(product) - 1 };
      if (getQuantity(product) - 1 === 0) {
         dispatch(removeCart({ ...product, count: 1 }));
         return;
      }
      dispatch(subtractQuantity(prod));
   };

   const removeProduct = (product: rootState) => {
      const prod = { ...product, count: 1 };
      dispatch(removeCart(prod));
   };

   const getTotalPrice = () => {
      return products.reduce((sum, i) => {
         return sum + Number(i.price) * i.count;
      }, 0);
   };
   return (
      <CartHanger onClick={onOpen}>
         <CartDrawer
            isOpen={isOpen}
            onClose={onClose}
            products={products}
            increaseQuantity={increaseQuantity}
            removeProduct={removeProduct}
            decreaseQuantity={decreaseQuantity}
         />
         <TotalItems>{products.length} Items</TotalItems>
         <PriceBox>${getTotalPrice().toFixed(2)}</PriceBox>
      </CartHanger>
   );
};
export default Cart;
