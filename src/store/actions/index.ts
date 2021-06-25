import {
   ADD_TO_CART,
   ADD_QUANTITY,
   SUB_QUANTITY,
   EMPTY_CART,
   REMOVE_FROM_CART,
} from './actions';

export const addToCart = (productDetails: rootState) => {
   return {
      type: ADD_TO_CART,
      productDetails,
   };
};

export const removeCart = (productDetails: rootState) => {
   return {
      type: REMOVE_FROM_CART,
      productDetails,
   };
};

export const subtractQuantity = (productDetails: rootState) => {
   return {
      type: SUB_QUANTITY,
      productDetails,
   };
};

export const addQuantity = (productDetails: rootState) => {
   return {
      type: ADD_QUANTITY,
      productDetails,
   };
};
export const emptyCart = () => {
   return {
      type: EMPTY_CART,
   };
};
