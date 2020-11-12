import { createStore } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "../Reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, reducers);

export default (initStates) =>
  createStore(enhancedReducer, initStates, composeWithDevTools());
