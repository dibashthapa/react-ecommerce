import {
   ADD_TO_CART,
   REMOVE_FROM_CART,
   ADD_QUANTITY,
   SUB_QUANTITY,
} from '../actions/actions';

export interface defaultState {
   products: rootState[];
}

const initialState: defaultState = {
   products: [],
};

export const ShoppingReducer = (
   state: defaultState = initialState,
   action: ActionsType
) => {
   switch (action.type) {
      case ADD_TO_CART:
         return {
            ...state,
            products: state.products.find(
               (p) => p.id === action.productDetails.id
            )
               ? [...state.products]
               : [...state.products, action.productDetails],
         };
      case REMOVE_FROM_CART:
         return {
            ...state,
            products: state.products.filter(
               (p) => p.id !== action.productDetails.id
            ),
         };
      case ADD_QUANTITY:
         return {
            ...state,
            products: state.products.map((product) =>
               product.id === action.productDetails.id
                  ? { ...product, count: product.count + 1 }
                  : product
            ),
         };
      case SUB_QUANTITY:
         return {
            ...state,
            products: state.products.map((product) =>
               product.id === action.productDetails.id
                  ? {
                       ...product,
                       count: action.productDetails.count,
                    }
                  : product
            ),
         };

      default:
         return state;
   }
};
