export const addCart = (product) => {
    return {
        type: "ADDCART",
        payload: product,
    };
};

export const deleteCart = (id) => {
    return {
        type: "DELETECART",
        payload: id,
    };
};
