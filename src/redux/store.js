import { configureStore } from "@reduxjs/toolkit";
import cart from "../redux/actions";

const store = configureStore({
    reducer: { cart },
});

export default store;
