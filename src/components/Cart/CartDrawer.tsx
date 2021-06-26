import { Drawer, DrawerOverlay, DrawerContent } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Header, Item, Body } from './CartDrawer.style';
import { GiShoppingBag } from 'react-icons/gi';
import { useProductDispatch, useProductSelector } from '../../store';

interface Props {
   isOpen: boolean;
   onClose: () => void;
}

const CartDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
   const products = useProductSelector((state) => state.products);
   const dispatch = useProductDispatch();

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
                        <button>
                           <span>+</span>
                        </button>
                        <span>{value.count}</span>
                        <button>
                           <span>-</span>
                        </button>
                     </div>
                     <img src={value.image} alt="" />

                     <div className="info">
                        <div className="item-name">{value.title}</div>
                        <div className="item-price">{value.price}</div>
                        <div className="item-weight">13x2 lb</div>
                     </div>
                     <div className="item-total">
                        {Number(value.price) * value.count}$
                     </div>
                     <div className="item-remove">X</div>
                  </Item>
               ))}
            </Body>
         </DrawerContent>
      </Drawer>
   );
};

export default CartDrawer;
