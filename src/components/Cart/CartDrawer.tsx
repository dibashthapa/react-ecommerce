import { Drawer, DrawerOverlay, DrawerContent } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Header, Item, Body } from './CartDrawer.style';
import { GiShoppingBag } from 'react-icons/gi';

interface Props {
   isOpen: boolean;
   onClose: () => void;
   products: rootState[];
   increaseQuantity: (product: rootState) => void;
   decreaseQuantity: (product: rootState) => void;
   removeProduct: (product: rootState) => void;
}

const CartDrawer: React.FC<Props> = ({
   isOpen,
   onClose,
   products,
   increaseQuantity,
   decreaseQuantity,
   removeProduct,
}) => {
   return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
         <DrawerOverlay />
         <DrawerContent>
            <Header>
               <div className="item-count">
                  <GiShoppingBag /> <span>{products.length} Items</span>
               </div>
               <button className="close-btn" onClick={onClose}>
                  <CloseIcon />
               </button>
            </Header>

            <Body>
               {products.map((value) => (
                  <Item>
                     <div className="counter-box">
                        <button onClick={() => increaseQuantity(value)}>
                           <span>+</span>
                        </button>
                        <span>{value.count}</span>
                        <button onClick={() => decreaseQuantity(value)}>
                           <span>-</span>
                        </button>
                     </div>
                     <img src={value.image} alt="" />

                     <div className="info">
                        <div className="item-name">{value.title}</div>
                        <div className="item-price">{value.price}$</div>
                        <div className="item-weight">
                           {value.count}X{value.unit}
                        </div>
                     </div>
                     <div className="item-total">
                        {(Number(value.price) * value.count).toFixed(2)}$
                     </div>
                     <div
                        className="item-remove"
                        onClick={() => removeProduct(value)}
                     >
                        X
                     </div>
                  </Item>
               ))}
            </Body>
         </DrawerContent>
      </Drawer>
   );
};

export default CartDrawer;
