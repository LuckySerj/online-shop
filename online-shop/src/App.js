import { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Nav from "./components/Nav/Nav";
import Cart from "./pages/Cart/Cart";
import Favor from "./pages/Favor/Favor";
import NotFound from "./pages/errors/NotFound";
import ProductList from "./components/ProductList/ProductList";
import "bootstrap/scss/bootstrap.scss";
import { setModalOpen } from "./store/products/actions";
import { isInCart } from "./store/products/selectors";
import {
  getProductsThunk,
  getFavorites,
  getInCart,
  removeFromCart,
  setInCartThunk,
} from "./store/products/operations";

const App = () => {
  const dispatch = useDispatch();
  const [inCartProductId, setInCartProductId] = useState(null);
  const [outCartProductId, setOutCartProductId] = useState(null);
  const inCart = useSelector(isInCart);

  useEffect(() => {
    dispatch(getProductsThunk());
    dispatch(getInCart());
    dispatch(getFavorites());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onAddClick = (id) => {
    setInCartProductId(id);
    dispatch(setModalOpen(true));
  };
  const onRemoveClick = (id) => {
    setOutCartProductId(id);
    dispatch(setModalOpen(true));
  };

  const onConfirmAddClick = () => {
    const productsInCart = [...inCart];
    dispatch(setInCartThunk(inCartProductId, productsInCart));
  };

  const onConfirmRemoveClick = () => {
    const filtredProducts = inCart.filter((id) => id !== outCartProductId);
    dispatch(removeFromCart(filtredProducts));
  };

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/home">
          <ProductList
            onAddClick={onAddClick}
            onConfirmAddClick={onConfirmAddClick}
          />
        </Route>
        <Route exact path="/cart">
          <Cart
            onRemoveClick={onRemoveClick}
            onConfirmRemoveClick={onConfirmRemoveClick}
          />
        </Route>
        <Route exact path="/favorites">
          <Favor
            onAddClick={onAddClick}
            onConfirmAddClick={onConfirmAddClick}
          />
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </>
  );
};

export default App;
