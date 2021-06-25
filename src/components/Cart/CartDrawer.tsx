import {
   Drawer,
   DrawerBody,
   DrawerFooter,
   DrawerHeader,
   DrawerOverlay,
   DrawerContent,
   useDisclosure,
   Button,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { Header, Item } from './CartDrawer.style';

interface Props {
   isOpen: boolean;
   onClose: () => void;
}
const CartDrawer: React.FC<Props> = ({ isOpen, onClose }) => {
   return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
         <DrawerOverlay />
         <DrawerContent>
            <Header>
               <div className="item-count">
                  <span>2 Items</span>
               </div>
               <button className="close-btn" onClick={onClose}>
                  <CloseIcon />
               </button>
            </Header>

            <DrawerBody></DrawerBody>

            <DrawerFooter>
               <Button variant="outline" mr={3} onClick={onClose}>
                  Cancel
               </Button>
               <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
         </DrawerContent>
      </Drawer>
   );
};

export default CartDrawer;
