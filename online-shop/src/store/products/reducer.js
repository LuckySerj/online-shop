import {
  SET_ERROR,
  SET_FAVORITES,
  SET_IN_CART,
  SET_MODAL_OPEN,
  SET_PRODUCTS,
} from "./types";

const initialState = {
  goods: [],
  favorites: [],
  inCart: [],
  isModalActive: false,
  error: null,
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, goods: action.payload };
    case SET_ERROR:
      return { ...state, error: action.payload };
    case SET_FAVORITES:
      return { ...state, favorites: action.payload };
    case SET_IN_CART:
      return { ...state, inCart: action.payload };
    case SET_MODAL_OPEN:
      return { ...state, isModalActive: action.payload };
    default:
      return state;
  }
};
