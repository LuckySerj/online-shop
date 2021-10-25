import { useSelector } from "react-redux";

import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.scss";
import PropTypes from "prop-types";
import {
  getGoods,
  isError,
  isModalOpen,
} from "../../store/store-components/selectors";
import Error from "../Error/Error";
import Modal from "../Modal/Modal";
import Button from "../Button/Button";

const ProductsList = ({ onAddClick, onConfirmAddClick }) => {
  const modalOpen = useSelector(isModalOpen);
  const products = useSelector(getGoods);
  const error = useSelector(isError);
  return (
    <>
      {error ? (
        <Error />
      ) : (
        <>
          <h2 className="product-list-title ">Most Popular Products</h2>
          <ul className="grid product-list p-0">
            {products.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  product={item}
                  onAddClick={onAddClick}
                />
              );
            })}
          </ul>
        </>
      )}
      {modalOpen && (
        <Modal
          header="Do you want to add the product to cart?"
          text="This product will be saved in your cart"
          actions={
            <>
              <Button
                text="Add"
                bgColor="#ff7c12"
                onClick={onConfirmAddClick}
                textColor="#fff"
                type="button"
              />
              {/* <Button
                    text="Cancel"
                    bgColor="#ff7c12"
                    onClick={closeAddToCartModal}
                    textColor="#fff"
                    type="button"
                  /> */}
            </>
          }
        />
      )}
    </>
  );
};

ProductsList.propTypes = {
  onAddClick: PropTypes.func,
  onConfirmAddClick: PropTypes.func,
};

ProductsList.defaultProps = {
  onAddClick: () => {},
  onConfirmAddClick: () => {},
};

export default ProductsList;
