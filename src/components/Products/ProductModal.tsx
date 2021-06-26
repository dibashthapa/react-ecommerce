import { ProductModalImage, DescriptionWrapper } from './ProductModal.style';
import { CartButton, CounterBox } from './index.style';
import { RiShoppingCart2Line } from 'react-icons/ri';
import {
   Modal,
   ModalBody,
   ModalContent,
   ModalOverlay,
   Grid,
} from '@chakra-ui/react';

interface Props {
   open: boolean;
   setOpen: Function;
   title: string;
   description: string;
   image: string;
   addCart: () => void;
   getQuantity: () => number;
   increaseQuantity: () => void;
   decreaseQuantity: () => void;
}

const ProductModal: React.FC<Props> = ({
   open,
   setOpen,
   title,
   description,
   image,
   addCart,
   getQuantity,
   increaseQuantity,
   decreaseQuantity,
}) => {
   return (
      <Modal isOpen={open} onClose={() => setOpen(false)} isCentered size="4xl">
         <ModalOverlay />
         <ModalBody>
            <ModalContent>
               <Grid gridTemplateColumns="repeat(2,1fr)">
                  <ProductModalImage>
                     <img src={image} alt="" />
                  </ProductModalImage>
                  <DescriptionWrapper>
                     <div className="product-info">
                        <h1 className="product-title">{title}</h1>
                        <div className="product-weight">1 lb</div>
                        <p className="product-description">{description}</p>
                        <div className="product-cart">
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
                        </div>
                     </div>
                  </DescriptionWrapper>
               </Grid>
            </ModalContent>
         </ModalBody>
      </Modal>
   );
};

export default ProductModal;
