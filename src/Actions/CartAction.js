export const ADD_CART = "cart/ADD_CART";
export const REMOVE_CART = "cart/REMOVE_CART";

export const addCart = (product) => ({
  type: ADD_CART,
  payload: product,
});

export const removeCart = () => ({
  type: REMOVE_CART,
});
