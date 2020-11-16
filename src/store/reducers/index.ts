import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  ADD_QUANTITY,
  SUB_QUANTITY,
} from "../actions/actions";


const initialState: defaultState = {
  products: [],
};

export const ShoppingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        products: !state.products.some(
          (p) => p.id === action.productDetails.id
        )
          ? [...state.products, action.productDetails]
          : [...state.products],
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.id
            ? { ...product, selected: false, quantity: 1 }
            : product
        ),
      };
    case ADD_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.productDetails.id
            ? { ...product, count: product.count! + 1 }
            : product
        ),
      };
    case SUB_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.productDetails.id
            ? { ...product, count: product.count! > 0 ? product.count! - 1 : 0 }
            : product
        ),
      };

    default:
      return state;
  }
};
