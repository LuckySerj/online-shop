import {
  SET_PRODUCTS,
  SET_ERROR,
  SET_FAVORITES,
  SET_IN_CART,
  SET_MODAL_OPEN,
} from "./types";

export const setProducts = (data) => {
  return { type: SET_PRODUCTS, payload: data };
};

export const setError = (err) => {
  return { type: SET_ERROR, payload: err };
};

export const setFavorites = (data) => {
  return { type: SET_FAVORITES, payload: data };
};

export const setInCart = (data) => {
  return { type: SET_IN_CART, payload: data };
};

export const setModalOpen = (boolean) => {
  return { type: SET_MODAL_OPEN, payload: boolean };
};
