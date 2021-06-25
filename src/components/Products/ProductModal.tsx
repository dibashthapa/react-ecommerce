import { ProductModalImage, DescriptionWrapper } from './ProductModal.style';
import { CartButton } from './index.style';

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
}

const ProductModal: React.FC<Props> = ({
   open,
   setOpen,
   title,
   description,
   image,
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
                           <CartButton>Cart</CartButton>
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
