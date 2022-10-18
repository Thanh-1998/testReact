import * as actionType from "../actions/actionTypes";

const initialState = {
    cartAr: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.BUY_PRODUCT:
            const productInCart = state.cartAr.find((p) => p.id === action.id);
            if (!productInCart) {
                return {
                    cartAr: [...state.cartAr, action.payload],
                };
            } else {
                let newCart = state.cartAr;
                const objIndex = newCart.findIndex(
                    (obj) => obj.id === action.payload.id
                );
                if (newCart[objIndex].quantity === undefined) {
                    newCart[objIndex].quantity = 2;
                } else {
                    newCart[objIndex].quantity = newCart[objIndex].quantity + 1;
                }
                return { cartAr: [...newCart] };
            }
        case actionType.DELETE_PRODUCT:
            let newCart = state.cartAr;
            const objIndex = newCart.findIndex(
                (obj) => obj.id === action.payload.id
            );
            newCart.splice(objIndex, 1);
            return { cartAr: [...newCart] };
        default:
            break;
    }
};

export default cartReducer;
