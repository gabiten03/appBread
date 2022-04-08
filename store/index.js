import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/category.reducers";
import BreadReducer from "./reducers/bread.reducers";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    breads: BreadReducer
});


export default createStore(RootReducer);
