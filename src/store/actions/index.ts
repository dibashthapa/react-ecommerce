import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
  EMPTY_CART,
  REMOVE_FROM_CART,
} from "./actions";


export const addToCart = ({productDetails}: productInterface) => {
  return {
    type: ADD_TO_CART,
    productDetails,
  };
};

export const removeCart =  ( {productDetails}: productInterface) => {
  return {
    type: REMOVE_FROM_CART,
    productDetails,
  };
};

export const subtractQuantity = ({productDetails}: productInterface) => {
  return {
    type: SUB_QUANTITY,
    productDetails,
  };
};

export const addQuantity = ( {productDetails}: productInterface) => {
  return {
    type: ADD_QUANTITY,
    productDetails,
  };
};
export const emptyCart = ({productDetails}: productInterface) => {
  return {
    type: EMPTY_CART,
  };
};

