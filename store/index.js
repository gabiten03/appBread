import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import CategoryReducer from "./reducers/category.reducers";
import BreadReducer from "./reducers/bread.reducers";
import CartReducer from "./reducers/cart.reducers";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer,
    cart: CartReducer
});


export default createStore(RootReducer, applyMiddleware(thunk));
