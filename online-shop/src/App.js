import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cart from "./pages/Cart/Cart";
import Favor from "./pages/Favor/Favor";
import NotFound from "./pages/errors/NotFound";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Error from "./components/Error/Error";
import ProductList from "./components/ProductList/ProductList";
import getProducts from "./api/api";
import "bootstrap/scss/bootstrap.scss";

const App = () => {
  const [addToCartModalOpen, setAddToCartModalOpen] = useState(false);
  const [removeFromModalOpen, setRemoveFromModalOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [selectedToCartItemId, setSelectedToCartItemId] = useState(null);
  const [removeFromCartItemId, setRemoveFromCartItemId] = useState(null);
  const [itemsIsInCart, setItemsIsInCart] = useState([]);

  useEffect(() => {
    getProducts()
      .then((items) => setItems(items))
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    if (localStorage.getItem("inCart")) {
      const itemsIsInCartLS = JSON.parse(localStorage.getItem("inCart"));
      setItemsIsInCart(itemsIsInCartLS);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("favorites")) {
      const favoritesLS = JSON.parse(localStorage.getItem("favorites"));
      setFavorites(favoritesLS);
    }
  }, []);

  const addToCartBtnClick = (id) => {
    setSelectedToCartItemId(id);
    setAddToCartModalOpen(true);
  };
  const removeFromCartBtnClick = (id) => {
    setRemoveFromCartItemId(id);
    setRemoveFromModalOpen(true);
  };

  const closeAddToCartModal = () => {
    setAddToCartModalOpen(false);
  };

  const closeRemoveFromCartModal = () => {
    setRemoveFromModalOpen(false);
  };
  const onCheckBtnClick = (id) => {
    const newFavoritesArr = [...favorites];
    newFavoritesArr.includes(id)
      ? newFavoritesArr.splice(newFavoritesArr.indexOf(id), 1)
      : newFavoritesArr.push(id);
    setFavorites(newFavoritesArr);
    localStorage.setItem("favorites", JSON.stringify(newFavoritesArr));
  };

  const onCartBtnClick = () => {
    const newItemsInCartArr = [...itemsIsInCart];
    newItemsInCartArr.push(selectedToCartItemId);
    const uniqueCartItems = [...new Set(newItemsInCartArr)];
    setItemsIsInCart(uniqueCartItems);
    localStorage.setItem("inCart", JSON.stringify(uniqueCartItems));
    closeAddToCartModal();
  };

  const deleteBtnClick = () => {
    const filtredProducts = itemsIsInCart.filter(
      (id) => id !== removeFromCartItemId
    );
    setItemsIsInCart(filtredProducts);
    localStorage.setItem("inCart", JSON.stringify(filtredProducts));
    closeRemoveFromCartModal();
  };

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          {error ? (
            <Error />
          ) : (
            <ProductList
              products={items}
              favoritesProducts={favorites}
              onClick={addToCartBtnClick}
              onCheckBtnClick={onCheckBtnClick}
            />
          )}
          {addToCartModalOpen && (
            <Modal
              closeBtn="btn-close btn-close-white"
              isCloseBtn={true}
              header="Do you want to add the product to cart?"
              headerTextColor="#fff"
              bgHeader="#fb4509"
              text="This product will be saved in your cart"
              actions={
                <>
                  <Button
                    text="Add"
                    bgColor="#ff7c12"
                    onClick={onCartBtnClick}
                    textColor="#fff"
                    type="button"
                  />
                  <Button
                    text="Cancel"
                    bgColor="#ff7c12"
                    onClick={closeAddToCartModal}
                    textColor="#fff"
                    type="button"
                  />
                </>
              }
              onClick={closeAddToCartModal}
            />
          )}
        </Route>
        <Route exact path="/cart">
          <Cart
            items={items}
            itemsIsInCart={itemsIsInCart}
            favorites={favorites}
            removeFromCartBtnClick={removeFromCartBtnClick}
            onCheckBtnClick={onCheckBtnClick}
          />

          {removeFromModalOpen && (
            <Modal
              closeBtn="btn-close btn-close-white"
              isCloseBtn={true}
              header="Do you want to remove the product from cart?"
              headerTextColor="#fff"
              bgHeader="#fb4509"
              text="This product will be removed from your cart"
              actions={
                <>
                  <Button
                    text="Ok"
                    bgColor="#ff7c12"
                    onClick={deleteBtnClick}
                    textColor="#fff"
                    type="button"
                  />
                  <Button
                    text="Cancel"
                    bgColor="#ff7c12"
                    onClick={closeRemoveFromCartModal}
                    textColor="#fff"
                    type="button"
                  />
                </>
              }
              onClick={closeRemoveFromCartModal}
            />
          )}
        </Route>
        <Route exact path="/favorites">
          <Favor
            items={items}
            favorites={favorites}
            addToCartBtnClick={addToCartBtnClick}
            onCheckBtnClick={onCheckBtnClick}
          />

          {addToCartModalOpen && (
            <Modal
              closeBtn="btn-close btn-close-white"
              isCloseBtn={true}
              header="Do you want to add the product to cart?"
              headerTextColor="#fff"
              bgHeader="#fb4509"
              text="This product will be saved in your cart"
              actions={
                <>
                  <Button
                    text="Add"
                    bgColor="#ff7c12"
                    onClick={onCartBtnClick}
                    textColor="#fff"
                    type="button"
                  />
                  <Button
                    text="Cancel"
                    bgColor="#ff7c12"
                    onClick={closeAddToCartModal}
                    textColor="#fff"
                    type="button"
                  />
                </>
              }
              onClick={closeAddToCartModal}
            />
          )}
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
