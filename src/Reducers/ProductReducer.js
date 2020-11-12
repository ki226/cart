import { SET_PRODUCT } from "../Actions/ProductAction";

const initState = [];

export default function reducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_PRODUCT: {
      return {
        ...state,
        products: payload,
      };
    }
    default: {
      return state;
    }
  }
}
