import { ADD_CART, REMOVE_CART } from "../Actions/CartAction";

const initState = {
  items: [],
  totalAmount: 0,
};

export default function reducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART: {
      const selectProduct = [];
      return {
        ...state,
        totalAmount: state.totalAmount + 1,
        items: selectProduct.concat(payload),
      };
    }
    case REMOVE_CART:
      return;
    default: {
      return state;
    }
  }
}
