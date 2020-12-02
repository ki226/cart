import { ADD_CART, REMOVE_CART } from "../Actions/CartAction";

const initState = {
  items: [],
  totalAmount: 0,
};

export default function reducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CART: {
      return {
        ...state,
        totalAmount: state.totalAmount + 1,
        items: state.items.includes(payload)
          ? state.items
          : state.items.concat(payload),
      };
    }
    case REMOVE_CART:
      return;
    default: {
      return state;
    }
  }
}

//includes로 걸러내면 items에 payload가 추가되지 않기 때문에 품별 수량을 파악할 수 없다.
//다 넣고 표시할때 걸러야한다.
//중복된 값들을 따로 분리해야한다.
//이미 있는 값이라면 추가되지 않고 수량이 늘어나는 로직이 필요