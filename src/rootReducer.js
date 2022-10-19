import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./reducers/index";

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;
