import { createStore } from "react-redux";

import { buyProduct } from "./actions/action";

const store = createStore(buyProduct)
console.log(store);

export default store;
