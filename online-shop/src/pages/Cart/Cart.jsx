import { useSelector } from "react-redux";

import ProductCard from "../../components/ProductCard/ProductCard";
import PropTypes from "prop-types";
import {
  getGoods,
  isInCart,
  isModalOpen,
} from "../../store/products/selectors";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import OrderForm from "../../components/OrderForm/OrderForm";

const Cart = ({ onRemoveClick, onConfirmRemoveClick }) => {
  const inCart = useSelector(isInCart);
  const products = useSelector(getGoods);
  const modalOpen = useSelector(isModalOpen);
  const itemsInCart = products.filter((product) => inCart.includes(product.id));

  return (
    <>
      {itemsInCart.length ? (
        <>
          <ul className="grid product-list p-0">
            {itemsInCart.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  product={item}
                  onRemoveClick={onRemoveClick}
                  status="inCart"
                />
              );
            })}
          </ul>
          <OrderForm itemsInCart={itemsInCart} />
        </>
      ) : (
        <p className="ms-5">Your cart is empty</p>
      )}
      {modalOpen && (
        <Modal
          header="Do you want to remove the product from cart?"
          text="This product will be removed from your cart"
          actions={
            <>
              <Button
                text="Ok"
                bgColor="#ff7c12"
                onClick={onConfirmRemoveClick}
                textColor="#fff"
                type="button"
              />
            </>
          }
        />
      )}
    </>
  );
};

Cart.propTypes = {
  onRemoveClick: PropTypes.func,
  onConfirmRemoveClick: PropTypes.func,
};

Cart.defaultProps = {
  onRemoveClick: () => {},
  onConfirmRemoveClick: () => {},
};

export default Cart;
