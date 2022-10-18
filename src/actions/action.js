const BUY_PRODUCT = "buy_product";
const DELETE_PRODUCT = "delete_product";

export const buyProduct = (product) => {
    return {
        type: BUY_PRODUCT,
        payload: product,
    };
};

export const deleteProduct = (id) => {
    return {
        type: DELETE_PRODUCT,
        payload: id,
    };
};
