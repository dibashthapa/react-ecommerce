import { configureStore } from '@reduxjs/toolkit';
import { ShoppingReducer } from './reducers';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
   reducer: ShoppingReducer,
});

export type ProductDispatch = typeof store.dispatch;
export const useProductDispatch = () => useDispatch<ProductDispatch>();
export const useProductSelector: TypedUseSelectorHook<rootState> = useSelector;
export default store;
