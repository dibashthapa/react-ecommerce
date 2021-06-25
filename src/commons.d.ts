interface rootState {
   id: number;
   count: number;
   image: string;
   name: string;
   price: string;
   weight: string;
}

type CartActions =
   | 'ADD_TO_CART'
   | 'REMOVE_FROM_CART'
   | 'ADD_QUANTITY'
   | 'SUB_QUANTITY'
   | 'EMPTY_CART';

type ActionsType = { type: CartActions; productDetails: rootState };
