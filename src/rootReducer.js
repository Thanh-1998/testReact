import { combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./reducers";

const rootReducer = combineReducers({
    cart: cartReducer,
});

export default rootReducer;
