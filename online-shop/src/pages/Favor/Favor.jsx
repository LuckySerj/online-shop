import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard/ProductCard";
import PropTypes from "prop-types";
import {
  getGoods,
  isFavorite,
  isModalOpen,
} from "../../store/store-components/selectors";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";

const Favor = ({ onAddClick, onConfirmAddClick }) => {
  const products = useSelector(getGoods);
  const favorites = useSelector(isFavorite);
  const modalOpen = useSelector(isModalOpen);
  const favoritesItems = products.filter((product) =>
    favorites.includes(product.id)
  );

  return (
    <>
      {favoritesItems.length ? (
        <>
          <ul className="grid product-list p-0">
            {favoritesItems.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  product={item}
                  onAddClick={onAddClick}
                  status="favorite"
                />
              );
            })}
          </ul>
        </>
      ) : (
        <p className="ms-5">List of favorite products is empty</p>
      )}

      {modalOpen && (
        <Modal
          header="Do you want to add the product to cart?"
          text="This product will be saved in your cart"
          actions={
            <Button
              text="Add"
              bgColor="#ff7c12"
              onClick={onConfirmAddClick}
              textColor="#fff"
              type="button"
            />
          }
        />
      )}
    </>
  );
};

Favor.propTypes = {
  onAddClick: PropTypes.func,
  onConfirmAddClick: PropTypes.func,
};

Favor.defaultProps = {
  onAddClick: () => {},
  onConfirmAddClick: () => {},
};

export default Favor;
