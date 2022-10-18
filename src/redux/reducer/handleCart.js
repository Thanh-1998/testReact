import actions from "../action/index";

const cart = [];

const handeCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case actions.ADDCART:
            const exist = state.find(
                (x) => x.id_prouduct === product.id_prouduct
            );

            break;

        default:
            break;
    }
};

export default handeCart;
