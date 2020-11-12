import { SET_COUNT, RESET_COUNT } from "../Actions/CountAction";

const initState = {
  count: 0,
};

export default function reducer(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_COUNT: {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case RESET_COUNT: {
      return initState;
    }
    default: {
      return state;
    }
  }
}
