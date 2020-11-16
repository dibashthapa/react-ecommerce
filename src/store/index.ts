import { createStore } from "redux";
import { ShoppingReducer } from "./reducers";
const store = createStore(
  ShoppingReducer,
  (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION__ && (window && (window as any)).__REDUX_DEVTOOLS_EXTENSION__()
);


export default store
