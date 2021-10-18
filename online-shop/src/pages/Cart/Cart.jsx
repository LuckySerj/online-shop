import ProductCard from '../../components/ProductCard/ProductCard';
import PropTypes from 'prop-types';

const Cart = (props) => {
    const { items, itemsIsInCart, favorites, onCheckBtnClick, removeFromCartBtnClick } = props
    const itemsInCart = items.filter(product => itemsIsInCart.includes(product.id));

    return (
        (itemsInCart.length > 0)
            ? <>
                <ul className="grid product-list p-0">
                    {itemsInCart.map(item => {
                        return (
                            <ProductCard key={item.id}
                                product={item}
                                onCheckBtnClick={onCheckBtnClick}
                                favorites={favorites}
                                itemsIsInCart={itemsIsInCart}
                                removeFromCartBtnClick={removeFromCartBtnClick}
                                status="inCart"
                            />
                        )
                    })}
                </ul>
            </>
            : <p className = 'ms-5'>Your cart is empty</p>
    )
}

Cart.propTypes = {
    items: PropTypes.array.isRequired,
    onCheckBtnClick: PropTypes.func,
    removeFromCartBtnClick: PropTypes.func,
    favorites: PropTypes.array,
    itemsIsInCart: PropTypes.array
}

Cart.defaultProps = {
    onCheckBtnClick: () => { },
    removeFromCartBtnClick: () => { },
    favorites: [],
    itemsIsInCart: []
}

export default Cart