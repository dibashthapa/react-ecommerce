import { Drawer, DrawerOverlay, DrawerContent } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Header, Item, Body } from './CartDrawer.style';
import { GiShoppingBag } from 'react-icons/gi';

interface Props {
   isOpen: boolean;
   onClose: () => void;
}
const CartDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
   return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="sm">
         <DrawerOverlay />
         <DrawerContent>
            <Header>
               <div className="item-count">
                  <GiShoppingBag /> <span>2 Items</span>
               </div>
               <button className="close-btn" onClick={onClose}>
                  <CloseIcon />
               </button>
            </Header>

            <Body>
               <Item>
                  <div className="counter-box">
                     <button>
                        <span>+</span>
                     </button>
                     <span>3</span>
                     <button>
                        <span>-</span>
                     </button>
                  </div>
                  <img
                     src="https://res.cloudinary.com/redq-inc/image/upload/c_fit,q_auto:best,w_300/v1589614568/pickbazar/grocery/CelerySticks_ulljfz.jpg"
                     alt=""
                  />

                  <div className="info">
                     <div className="item-name">Clementines</div>
                     <div className="item-price">$3</div>
                     <div className="item-weight">13x2 lb</div>
                  </div>
                  <div className="item-total">$39.00</div>
                  <div className="item-remove">X</div>
               </Item>
            </Body>
         </DrawerContent>
      </Drawer>
   );
};

export default CartDrawer;
