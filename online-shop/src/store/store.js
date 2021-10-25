import { productsReducer } from "./store-components/reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  productsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
