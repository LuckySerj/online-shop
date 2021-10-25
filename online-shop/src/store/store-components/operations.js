import getProducts from "../../api/api";
import {
  setError,
  setFavorites,
  setInCart,
  setModalOpen,
  setProducts,
} from "./actions";

export const getProductsThunk = () => (dispatch) => {
  getProducts()
    .then((products) => dispatch(setProducts(products)))
    .catch((error) => dispatch(setError(error)));
};

export const getFavorites = () => (dispatch) => {
  if (localStorage.getItem("favorites")) {
    const favoritesLS = JSON.parse(localStorage.getItem("favorites"));
    dispatch(setFavorites(favoritesLS));
  }
};

export const getInCart = () => (dispatch) => {
  if (localStorage.getItem("inCart")) {
    const inCartLS = JSON.parse(localStorage.getItem("inCart"));
    dispatch(setInCart(inCartLS));
  }
};

export const setFavoritesThunk = (id, favorites) => (dispatch) => {
  favorites.includes(id)
    ? favorites.splice(favorites.indexOf(id), 1)
    : favorites.push(id);
  dispatch(setFavorites(favorites));
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const setInCartThunk = (id, products) => (dispatch) => {
  products.push(id);
  const uniqueCartItems = [...new Set(products)];
  dispatch(setInCart(uniqueCartItems));
  localStorage.setItem("inCart", JSON.stringify(uniqueCartItems));
  dispatch(setModalOpen(false));
};

export const removeFromCart = (products) => (dispatch) => {
  dispatch(setInCart(products));
  dispatch(setModalOpen(false));
  localStorage.setItem("inCart", JSON.stringify(products));
};
